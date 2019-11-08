import { Injectable } from '@angular/core';
import { AutobotManager } from '../core/autobot-manager';
import { AutobotMessageFactory } from '../core/autobot-message-factory.service';
import { AutobotState, CREATE_BOT } from '../store/reducers';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AutobotManagerFactory {
  private managers: any;

  constructor(
    private autobotMessageFactory: AutobotMessageFactory,
    private store: Store<AutobotState>
  ) {
    this.managers = {};
  }

  getManager(botId: string) {
    if (!this.managers.hasOwnProperty(botId) || this.managers[botId] === undefined) {
      this.store.dispatch({ type: CREATE_BOT, payload: { botId: botId } });
      this.managers[botId] = this.createManager(botId);
    }
    return this.managers[botId];
  }

  createManager(botId) {
    return new AutobotManager(botId, this.autobotMessageFactory, this.store);
  }
}
