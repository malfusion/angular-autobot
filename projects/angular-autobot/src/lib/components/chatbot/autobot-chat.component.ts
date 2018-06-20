import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, Action } from '../../models';
import { AutobotManagerFactory } from '../../core/autobot-manager.factory.service';
import { AutobotManager } from '../../core/autobot-manager';
import {
  AutobotState,
  selectBotById_action,
  selectBotById_messagesSortedByDate,
  isBotFrozen,
  selectBotById_messagesLatest
} from '../../store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'autobot-chat',
  templateUrl: './autobot-chat.component.html',
  styles: []
})
export class AutobotChatComponent implements OnInit, OnChanges {
  @Input('botId') botId: string;

  messages = [];
  _actionResolve: (any) => any; // Resolver function definition

  @Input() opts: any;

  private botManager: AutobotManager;
  messages$: Observable<Message[]> = undefined;
  action$: Observable<Action> = undefined;

  latestMessage$;
  isFrozen$;

  constructor(
    private botManagerFactory: AutobotManagerFactory,
    private store: Store<AutobotState>
  ) {}

  ngOnChanges() {
    if (this.botId !== '' && this.botId !== undefined) {
      this.botManager = this.botManagerFactory.getManager(this.botId);
      this.messages$ = this.store.select(selectBotById_messagesSortedByDate(this.botId));
      this.action$ = this.store.select(selectBotById_action(this.botId));
      this.isFrozen$ = this.store.select(isBotFrozen(this.botId));
      this.latestMessage$ = this.store.select(selectBotById_messagesLatest(this.botId));
    }
  }

  ngOnInit() {}

  getCurrentActionResolver() {
    return this.botManager._getCurrentActionResolver();
  }
}
