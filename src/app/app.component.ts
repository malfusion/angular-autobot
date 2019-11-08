import { Component, OnInit } from '@angular/core';
import { AngularAutobotService } from 'angular-autobot';
import * as _ from 'lodash';
import * as uuidv1 from 'uuid/v1';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private botService: AngularAutobotService) {}

  ngOnInit() {
    const bots = ['bot1', 'bot2', 'bot3'];
    const messages = [
      'Hello there',
      'Im just a bot',
      'I passed the turing test obv!',
      'Am i a bot or a human?',
      "You'll never know"
    ];

    setInterval(() => {
      const randomBot = _.sample(bots);
      const randomMessage = _.sample(messages);

      const isHuman = Math.random() > 0.5;
      isHuman
        ? this.botService.bot(randomBot).addHumanMessage({
            id: uuidv1(),
            type: 'text',
            visible: true,
            loading: false,
            content: randomMessage,
            human: false,
            created_date: new Date()
          })
        : this.botService.bot(randomBot).addBotMessage({
            id: uuidv1(),
            type: 'text',
            visible: true,
            loading: false,
            content: randomMessage,
            human: false,
            created_date: new Date()
          });
    }, 500);

    this.askAnyQuestion('bot1', 10000);
    this.askAnyQuestion('bot2', 10000);
    this.askAnyQuestion('bot3', 10000);
  }

  askAnyQuestion(botId, timeout) {
    return _.sample([this.askButtonQuestion.bind(this), this.askTextInputQuestion.bind(this)])(
      botId,
      timeout
    );
  }

  askTextInputQuestion(botId, timeout) {
    setTimeout(() => {
      this.botService
        .bot(botId)
        .addAction('text', {}, { show: true, freeze: true })
        .then((res: any) => {
          const asyncMesgId = this.botService.bot(botId).addHumanMessage({
            id: uuidv1(),
            type: 'text',
            visible: true,
            loading: true,
            content: res,
            human: false,
            created_date: new Date(),
            freeze: true,
            freezeUntilLoad: true
          });
          console.log(asyncMesgId);
          this.doneLoading(botId, asyncMesgId, 1000);
          this.updateContent(botId, asyncMesgId, `Hahahaha! I'm gone!`, 2500);
        });
    }, timeout);
  }

  askButtonQuestion(botId, timeout) {
    const buttonItems = [
      {
        text: 'Good',
        value: 'good'
      },
      {
        text: 'Really Good',
        value: 'really_good'
      }
    ];

    setTimeout(() => {
      this.botService
        .bot(botId)
        .addAction('button', { items: buttonItems }, { delay: 100, freeze: true })
        .then((res: any) => {
          this.botService.bot(botId).addHumanMessage(res.value);
        });
    }, timeout);
  }

  doneLoading(botId, asyncMesgId, timeout) {
    setTimeout(() => {
      this.botService.bot(botId).updateMessageLoaded(botId, asyncMesgId);
    }, timeout);
  }

  updateContent(botId, asyncMesgId, content, timeout) {
    setTimeout(() => {
      this.botService.bot(botId).updateMessageContent(botId, asyncMesgId, content);
    }, timeout);
  }
}
