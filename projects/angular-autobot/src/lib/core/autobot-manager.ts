import { Message, Action } from '../models';
import { AutobotMessageFactory } from './autobot-message-factory.service';
import { Store } from '@ngrx/store';
import {
  AutobotState,
  ADD_MESSAGE,
  SET_ACTION,
  isBotFrozen,
  selectBotById_messagesList,
  selectBotById_action,
  UPDATE_MESSAGE_CONTENT,
  UPDATE_MESSAGE_LOADED
} from '../store/reducers';

export class AutobotManager {
  private _actionPromiseResolver;
  private botFrozen;
  constructor(
    private botId: string,
    private autobotMessageFactory: AutobotMessageFactory,
    private store: Store<AutobotState>
  ) {
    this.store.select(isBotFrozen(this.botId)).subscribe(frozen => {
      this.botFrozen = frozen;
    });
  }

  getId(): string {
    return this.botId;
  }

  /**
   * State Selectors
   */

  getMessages() {
    return this.store.select(selectBotById_messagesList);
  }

  getAction() {
    return this.store.select(selectBotById_action);
  }

  getState() {
    return this.store;
  }

  /**
   * Store Action Helpers
   */

  _addMessage(message: Message) {
    if (this.autobotMessageFactory.verifyMessageObj(message) && !this.botFrozen) {
      this.store.dispatch({
        type: ADD_MESSAGE,
        payload: { botId: this.botId, message: message }
      });
      return message.id;
    }
  }

  _getCurrentActionResolver() {
    return this._actionPromiseResolver;
  }

  _setAction(action: Action) {
    this.store.dispatch({
      type: SET_ACTION,
      payload: { botId: this.botId, action: action }
    });
    const actionP = new Promise((res, rej) => {
      this._actionPromiseResolver = res;
    });
    actionP.then(this._unsetAction.bind(this));
    return actionP;
  }

  _unsetAction() {
    this.store.dispatch({
      type: SET_ACTION,
      payload: { botId: this.botId, action: undefined }
    });
    this._actionPromiseResolver = undefined;
  }

  addHumanMessage(message: string | Message) {
    if (typeof message === 'string') {
      message = <Message>this.autobotMessageFactory.createTextMessage(message);
    }
    message.human = true;
    return this._addMessage(message);
  }

  addBotMessage(message: string | Message) {
    if (typeof message === 'string') {
      message = <Message>this.autobotMessageFactory.createTextMessage(message);
    }
    message.human = false;
    return this._addMessage(message);
  }

  addAction(actionName: string, opts: any = {}, autobotOpts: any = {}) {
    const action: Action = {
      type: actionName,
      actionData: opts,
      autobotOpts: autobotOpts,
      created_date: new Date()
    };
    const actionResolvePromise = this._setAction(action);
    this.processActionAutobotOptions(action);
    return actionResolvePromise;
  }

  processActionAutobotOptions(action: Action) {
    if (action.autobotOpts.delay !== undefined) {
      setTimeout(() => {
        action.autobotOpts.show = true;
      }, action.autobotOpts.delay);
    }
  }

  updateMessageLoaded(botId, messageId) {
    this.store.dispatch({
      type: UPDATE_MESSAGE_LOADED,
      payload: { botId: botId, messageId: messageId }
    });
  }

  updateMessageContent(botId, messageId, content) {
    this.store.dispatch({
      type: UPDATE_MESSAGE_CONTENT,
      payload: { botId: botId, messageId: messageId, content: content }
    });
  }
}
