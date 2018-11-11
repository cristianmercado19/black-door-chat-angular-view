import { RoomController } from 'black-door-chat-mvc/dist/room/controller/room.controller';
import { RoomView } from 'black-door-chat-mvc/dist/room/view/room.view.interface';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit, RoomView {

  controller: RoomController;

  showPingLabel = false;
  showIsTypingLabel = false;

  messages: Array<Message> = [];
  messageValue = '';

  disableSendButton = false;
  disabledTextMessage = false;
  showMessagePartnerDisconnected = false;

  showGoHome = false;
  showLeaveTheRoom = true;

  constructor(controller: RoomController, private _ngZone: NgZone) {
    this.controller = controller;
  }

  ngOnInit() {
    this.controller.init(this);
  }

  showPing(): void {
    this._ngZone.run(() => {

      this.showPingLabel = true;
      setTimeout(() => {
        this.showPingLabel = false;
      }, 500);
    });
  }

  addMessageYouAreIn(): void {
    const message = new Message(true, '..:: you are in the room ::..');
    this.messages.push(message);
  }

  getMessage(): string {
    return this.messageValue;
  }

  cleanInput(): void {
    this._ngZone.run(() => {
      this.messageValue = '';
    });
  }

  addMessageFromYou(message: string): void {
    this._ngZone.run(() => {
      const msg = new Message(true, message);
      this.messages.push(msg);
    });
  }

  addNewMessage(message: string): void {
    this._ngZone.run(() => {
      const msg = new Message(false, message);
      this.messages.push(msg);
    });
  }

  showIsTyping(): void {
    this._ngZone.run(() => {

      this.showIsTypingLabel = true;

      setTimeout(() => {
        this.showIsTypingLabel = false;
      }, 500);
    });
  }

  onSendMessage(): void {
    if (!this.disableSendButton) {
      this.controller.sendMessage();
    }
  }

  onIsTyping(): void {
    this.controller.isTyping();
  }

  onLeaveTheRoom(): void {
    this.controller.leaveTheRoom();
  }

  disableSendAction(): void {
    this._ngZone.run(() => {
      this.disableSendButton = true;
      this.disabledTextMessage = true;
    });
  }

  showWarningMessagePartnerDisconnected(): void {
    this._ngZone.run(() => {
      this.showMessagePartnerDisconnected = true;
    });
  }

  showGoHomeAction(): void {
    this._ngZone.run(() => {
      this.showGoHome = true;
    });
  }

  hideLeaveTheRoomAction(): void {
    this._ngZone.run(() => {
      this.showLeaveTheRoom = false;
    });
  }

  onGoHome(): void {
    this.controller.goHome();
  }

  onKeyUp(event: any): void {
    if (event.keyCode === 13) {
      this.onSendMessage();
    }
  }
}

class Message {
  constructor(public fromMe: boolean, public text: string) {
  }
}
