import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AutobotChatComponent } from './components/chatbot/autobot-chat.component';
import { AngularAutobotService } from './angular-autobot.service';

import { AutobotScrollDirective } from './directives/autobot-scroll.directive';
import { AutobotMarkdownDirective } from './directives/autobot-markdown.directive';
import { AutobotFocusDirective } from './directives/autobot-focus.directive';
import { TextMessageComponent } from './components/message/text-message/text-message.component';
import { EmbedMessageComponent } from './components/message/embed-message/embed-message.component';
import { MessageComponent } from './components/message/message.component';
import { ActionComponent } from './components/action/action.component';
import { SelectActionComponent } from './components/action/select-action/select-action.component';
import { ButtonActionComponent } from './components/action/button-action/button-action.component';
import { InputButtonActionComponent } from './components/action/input-button-action/input-button-action.component';
import { InputActionComponent } from './components/action/input-action/input-action.component';

import { autobotStateReducer } from './store/reducers';
import { AutobotMessageFactory } from './core/autobot-message-factory.service';
import { onAppInit } from './angular-autobot-initializer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ autobot: autobotStateReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 1000 // Retains last 25 states
    })
  ],
  declarations: [
    AutobotChatComponent,
    AutobotScrollDirective,
    AutobotMarkdownDirective,
    AutobotFocusDirective,
    TextMessageComponent,
    EmbedMessageComponent,
    MessageComponent,
    ActionComponent,
    SelectActionComponent,
    ButtonActionComponent,
    InputButtonActionComponent,
    InputActionComponent
  ],
  entryComponents: [TextMessageComponent, EmbedMessageComponent],
  exports: [AutobotChatComponent],
  providers: [
    AngularAutobotService,
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true,
      deps: [AutobotMessageFactory]
    }
  ]
})
export class AngularAutobotModule {}
