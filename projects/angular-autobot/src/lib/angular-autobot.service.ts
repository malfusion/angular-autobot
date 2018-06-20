import { Injectable } from '@angular/core';
import { AutobotManagerFactory } from './core/autobot-manager.factory.service';
import { AutobotManager } from './core/autobot-manager';
import { AutobotMessageFactory } from './core/autobot-message-factory.service';

@Injectable({
  providedIn: 'root'
})
export class AngularAutobotService {
  constructor(
    private botManagerFactory: AutobotManagerFactory,
    private autobotMessageFactory: AutobotMessageFactory
  ) {}

  bot(botId): AutobotManager {
    return this.botManagerFactory.getManager(botId);
  }

  registerComponent(compName: string, component: any) {
    this.autobotMessageFactory.registerComponent(compName, component);
  }
}
