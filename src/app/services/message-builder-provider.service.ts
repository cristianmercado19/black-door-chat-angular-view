import { Injectable } from '@angular/core';
import { MessageBuilderSimple } from 'black-door-chat-service/dist/message-builder/message-builder-simple';

@Injectable({
  providedIn: 'root'
})
export class MessageBuilderServiceProvider extends MessageBuilderSimple {

  constructor() {
    super();
  }
}
