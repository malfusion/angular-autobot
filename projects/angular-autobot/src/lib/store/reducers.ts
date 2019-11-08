import { createSelector } from '@ngrx/store';
// import { Action } from '@ngrx/store';
import { Message } from '../models';
import * as AutobotModels from '../models';

/*******************************
 * Action Constants
 ********************************/

export const CREATE_BOT = 'CREATE_BOT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_ACTION = 'SET_ACTION';
export const UPDATE_MESSAGE_LOADED = 'UPDATE_MESSAGE_LOADED';
export const UPDATE_MESSAGE_CONTENT = 'UPDATE_MESSAGE_CONTENT';

/*******************************
 * State & Initial State
 ********************************/
export interface AutobotBotState {
  action: any;
  messages: {
    [key: string]: Message;
  };
}
export interface AutobotState {
  bots: {
    [key: string]: AutobotBotState;
  };
  globalSettings: any;
}

export const autobotInitialState: AutobotState = {
  bots: {},
  globalSettings: {
    icansee: true
  }
};

/*******************************
 * Reducer
 ********************************/

export function autobotStateReducer(
  state: AutobotState = autobotInitialState,
  action: any
): AutobotState {
  switch (action.type) {
    case CREATE_BOT:
      return {
        ...state,
        bots: {
          ...state.bots,
          [(<any>action).payload.botId]: { action: undefined, messages: {} }
        }
      };

    case ADD_MESSAGE:
      if (state.bots[action.payload.botId] === undefined) {
        return state;
      }
      return {
        ...state,
        bots: {
          ...state.bots,
          [action.payload.botId]: {
            ...state.bots[action.payload.botId],
            messages: {
              ...state.bots[action.payload.botId].messages,
              [action.payload.message.id]: action.payload.message
            }
          }
        }
      };

    case UPDATE_MESSAGE_LOADED:
      if (
        state.bots[action.payload.botId] &&
        state.bots[action.payload.botId].messages[action.payload.messageId]
      ) {
        const currentFreeze =
          state.bots[action.payload.botId].messages[action.payload.messageId].freeze;
        const currentFreezeUntilLoad =
          state.bots[action.payload.botId].messages[action.payload.messageId].freezeUntilLoad;
        return {
          ...state,
          bots: {
            ...state.bots,
            [action.payload.botId]: {
              ...state.bots[action.payload.botId],
              messages: {
                ...state.bots[action.payload.botId].messages,
                [action.payload.messageId]: {
                  ...state.bots[action.payload.botId].messages[action.payload.messageId],
                  freeze: currentFreezeUntilLoad ? false : currentFreeze,
                  loading: false
                }
              }
            }
          }
        };
      } else {
        return state;
      }

    case UPDATE_MESSAGE_CONTENT:
      if (
        state.bots[action.payload.botId] &&
        state.bots[action.payload.botId].messages[action.payload.messageId]
      ) {
        return {
          ...state,
          bots: {
            ...state.bots,
            [action.payload.botId]: {
              ...state.bots[action.payload.botId],
              messages: {
                ...state.bots[action.payload.botId].messages,
                [action.payload.messageId]: {
                  ...state.bots[action.payload.botId].messages[action.payload.messageId],
                  content: action.payload.content
                }
              }
            }
          }
        };
      } else {
        return state;
      }

    case SET_ACTION:
      if (state.bots[action.payload.botId] === undefined) {
        return state;
      }
      return {
        ...state,
        bots: {
          ...state.bots,
          [action.payload.botId]: {
            ...state.bots[action.payload.botId],
            action: action.payload.action
          }
        }
      };
    default:
      return state;
  }
}

/*******************************
 * Selectors
 ********************************/

export const selectAutobotState = (state: any) => state.autobot;

export const selectBotById = botId =>
  createSelector(selectAutobotState, (state: AutobotState) => state.bots[botId]);

export const selectBotById_messages = botId =>
  createSelector(selectBotById(botId), (botState: AutobotBotState) => botState.messages);

export const selectBotById_messagesList = botId =>
  createSelector(selectBotById_messages(botId), messages =>
    Object.keys(messages).map(key => messages[key])
  );

export const selectBotById_action = botId =>
  createSelector(selectBotById(botId), (botState: AutobotBotState) => botState.action);

export const selectBotById_messagesSortedByDate = botId =>
  createSelector(selectBotById_messagesList(botId), messages => {
    return messages.sort((a, b) => <any>a.created_date - <any>b.created_date);
  });

export const selectBotById_messagesLatest = botId =>
  createSelector(selectBotById_messagesList(botId), sortedMessages => sortedMessages.slice(-1)[0]);

export const selectGlobalSettings = createSelector(selectAutobotState, (state: AutobotState) => {
  console.log('in selectglobalsettings', state);
  return state.globalSettings;
});

export const isBotFrozen = botId =>
  createSelector(
    selectGlobalSettings,
    selectBotById_action(botId),
    selectBotById_messagesLatest(botId),
    (settings, action: AutobotModels.Action, latestMessage: Message) => {
      // console.log(botId, settings, action, latestMessage);
      console.log(
        botId,
        settings,
        (<any>(action || {})).autobotOpts,
        (<any>(latestMessage || {})).freeze
      );

      return (
        (<any>(settings || {})).freeze ||
        (<any>(<any>(action || {})).autobotOpts || {}).freeze ||
        (<any>(latestMessage || {})).freeze ||
        false
      );
    }
  );
