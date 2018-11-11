import { Injectable } from '@angular/core';
import { AppRouterProvider } from './app-router.service';
import { ChatServiceProvider } from './chat-provider.service';
import { RoomController } from 'black-door-chat-mvc/dist/room/controller/room.controller';

@Injectable({
  providedIn: 'root'
})
export class RoomControllerService extends RoomController {

  constructor(service: ChatServiceProvider, router: AppRouterProvider) {
    super(service, router);
  }
}
