import { ChatService } from 'black-door-chat-service/dist/chat-service/chat-service';
import { Injectable } from '@angular/core';
import { MessageBuilderServiceProvider } from './message-builder-provider.service';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceProvider extends ChatService {

  constructor(messageBuilder: MessageBuilderServiceProvider) {
    super(messageBuilder);
  }
}
