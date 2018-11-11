import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RouterLinks } from './RouterLinks';
import { RoomJoinComponent } from './room-join/room-join.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';

const routes: Routes = [
  { path: RouterLinks.Main, component: MainComponent },
  { path: RouterLinks.CreateRoom, component: CreateRoomComponent},
  { path: RouterLinks.RoomJoin, component: RoomJoinComponent },
  { path: RouterLinks.ChatRoom, component: ChatRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
