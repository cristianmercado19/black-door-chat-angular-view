import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRouterProvider } from './services/app-router.service';
import { MainController } from 'black-door-chat-mvc/dist/main/controller/main.controller';

import { RoomJoinComponent } from './room-join/room-join.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { MainControllerService } from './services/main-controller.service';
import { CreateRoomController } from 'black-door-chat-mvc/dist/create-room/controller/create-room.controller';
import { ChatServiceProvider } from './services/chat-provider.service';
import { MessageBuilderServiceProvider } from './services/message-builder-provider.service';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { CreateRoomControllerService } from './services/create-room-controller.service';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { KeyComponent } from './key/key.component';
import { LoadingComponent } from './loading/loading.component';
import { RoomJoinController } from 'black-door-chat-mvc/dist/room-join/controller/room-join.controller';
import { RoomJoinControllerService } from './services/room-join-controller.service';
import { RoomController } from 'black-door-chat-mvc/dist/room/controller/room.controller';
import { RoomControllerService } from './services/room-controller.service';
import { FirstKeyLabelComponent } from './first-key-label/first-key-label.component';
import { SecondKeyLabelComponent } from './second-key-label/second-key-label.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RoomJoinComponent,
    ErrorMessageComponent,
    ChatRoomComponent,
    CreateRoomComponent,
    WarningMessageComponent,
    KeyComponent,
    LoadingComponent,
    FirstKeyLabelComponent,
    SecondKeyLabelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AppRouterProvider,
    {
      provide: MainController,
      useClass: MainControllerService
    },
    {
      provide: CreateRoomController,
      useClass: CreateRoomControllerService
    },
    {
      provide: RoomJoinController,
      useClass: RoomJoinControllerService
    },
    {
      provide: RoomController,
      useClass: RoomControllerService
    },
    MessageBuilderServiceProvider,
    ChatServiceProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
