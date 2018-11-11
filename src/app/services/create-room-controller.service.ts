import { Injectable } from '@angular/core';
import { CreateRoomController } from 'black-door-chat-mvc/dist/create-room/controller/create-room.controller';
import { AppRouterProvider } from './app-router.service';
import { ChatServiceProvider } from './chat-provider.service';

@Injectable({
  providedIn: 'root'
})
export class CreateRoomControllerService extends CreateRoomController {

  constructor(service: ChatServiceProvider, router: AppRouterProvider) {
    super(service, router);
  }
}
