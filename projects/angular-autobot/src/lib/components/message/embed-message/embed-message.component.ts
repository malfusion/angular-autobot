import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../models';

@Component({
  selector: 'lib-embed-message',
  templateUrl: './embed-message.component.html',
  styleUrls: ['./embed-message.component.css']
})
export class EmbedMessageComponent implements OnInit {

  @Input() msg: Message;
  constructor() { }

  ngOnInit() {
  }

}
