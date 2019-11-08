import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Message } from '../../models';
import { AutobotMessageFactory } from '../../core/autobot-message-factory.service';
import { getSlideFadeAnim } from '../../angular-autobot-animations';

@Component({
  selector: 'autobot-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  animations: [getSlideFadeAnim()]
})
export class MessageComponent implements OnInit {
  @ViewChild('messageLoading') messageLoadingTpl;
  @ViewChild('unknownMessage') unknownMessageTpl;
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input() msg: Message;

  constructor(private mesgFactory: AutobotMessageFactory) {}

  ngOnInit() {
    this.loadMessageComponent();
  }

  loadMessageComponent() {
    if (this.msg.loading) {
      // If message is in loading state, display the loading template
      this.container.createEmbeddedView(this.messageLoadingTpl);
    } else {
      // If message is done loading, prepare new message component for projection.
      const resolvedComponentFactory = this.mesgFactory.getComponentFactoryForMessageType(
        this.msg.type
      );
      if (resolvedComponentFactory !== undefined) {
        // If message factory is found, create an instance and add input properties
        const compRef = this.container.createComponent(resolvedComponentFactory);
        (<any>compRef.instance).msg = this.msg;
      } else {
        // If message factory is not found, display 'Unknown Message'
        this.container.createEmbeddedView(this.unknownMessageTpl);
      }
    }
  }
}
