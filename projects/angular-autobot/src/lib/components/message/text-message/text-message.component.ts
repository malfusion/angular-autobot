import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../models';

@Component({
  selector: 'autobot-text-message',
  templateUrl: './text-message.component.html',
  styleUrls: ['./text-message.component.css']
})
export class TextMessageComponent implements OnInit {
  @Input() msg: Message;
  constructor() {}

  ngOnInit() {}
}
