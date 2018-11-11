import { Injectable, NgZone } from '@angular/core';
import { MainRouter } from 'black-door-chat-mvc/dist/main/router/main.router.interface';
import { Router } from '@angular/router';
import { RouterLinks } from '../RouterLinks';
import { CreateRoomRouter } from 'black-door-chat-mvc/dist/create-room/router/create-room.router.interface';
import { RoomJoinRouter } from 'black-door-chat-mvc/dist/room-join/router/room-join.router.interface';
import { RoomRouter } from 'black-door-chat-mvc/dist/room/router/room.router.interface';

@Injectable({
  providedIn: 'root'
})
export class AppRouterProvider implements MainRouter, CreateRoomRouter, RoomJoinRouter, RoomRouter {

  constructor(private router: Router, private _ngZone: NgZone) {
  }

  redirectToJoinAnExistingRoom() {
    this.router.navigateByUrl(RouterLinks.RoomJoin);
  }

  redirectToCreateNewRoom(): void {
    this.router.navigateByUrl(RouterLinks.CreateRoom);
  }

  redirectToChatRoom(): void {
    this._ngZone.run(() => {
      this.router.navigateByUrl(RouterLinks.ChatRoom);
    });
  }

  redirectToMain(): void {
    this.router.navigateByUrl(RouterLinks.Main);
  }
}
