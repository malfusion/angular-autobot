import { Message } from '../models';
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import * as uuidv1 from 'uuid/v1';
import * as _ from 'lodash';

export let InbuiltMessageTypes = {
  TEXT: 'text',
  EMBED: 'embed'
};

/**
 * Singleton Service to cater to all message creation and validation needs of the library.
 */
@Injectable({
  providedIn: 'root'
})
export class AutobotMessageFactory {
  private customMessageTypes = [];
  private messageComponentRegistry = {};

  constructor(private resolver: ComponentFactoryResolver) {}

  getRegisteredMessageTypes() {
    return Object.values(InbuiltMessageTypes).concat(this.customMessageTypes);
  }

  verifyMessageObj(message: Message) {
    if (
      message.id === undefined ||
      typeof message.loading !== 'boolean' ||
      typeof message.visible !== 'boolean' ||
      (message.content === undefined || message.content === null) ||
      typeof message.visible !== 'boolean'
    ) {
      console.error('Message Verification Failed.', message);
      return false;
    }
    return true;
  }

  createTextMessage(messageStr): Message {
    return <Message>{
      id: uuidv1(),
      type: InbuiltMessageTypes.TEXT,
      content: messageStr,
      loading: false,
      visible: true,
      human: false,
      created_date: new Date()
    };
  }

  registerComponent(messageType: string, component: any) {
    if (messageType) {
      const found = _.find(this.customMessageTypes, messageType);
      if (found) {
        throw Error('Component name already registered.');
      }
      this.customMessageTypes.push(messageType);
      this.messageComponentRegistry[messageType] = component;
    }
  }

  getComponentClassForMessageType(messageType: string) {
    return this.messageComponentRegistry[messageType];
  }

  getComponentFactoryForMessageType(messageType: string) {
    const component = this.messageComponentRegistry[messageType];
    if (component) {
      return this.resolver.resolveComponentFactory(component);
    }
  }
}
