import { Injectable } from '@angular/core';
import { CreateRoomController } from 'black-door-chat-mvc/dist/create-room/controller/create-room.controller';
import { AppRouterProvider } from './app-router.service';
import { ChatServiceProvider } from './chat-provider.service';
import { RoomJoinController } from 'black-door-chat-mvc/dist/room-join/controller/room-join.controller';

@Injectable({
  providedIn: 'root'
})
export class RoomJoinControllerService extends RoomJoinController {

  constructor(service: ChatServiceProvider, router: AppRouterProvider) {
    super(service, router);
  }
}
