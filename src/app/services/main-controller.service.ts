import { Injectable } from '@angular/core';
import { MainController } from 'black-door-chat-mvc/dist/main/controller/main.controller';
import { AppRouterProvider } from './app-router.service';

@Injectable({
  providedIn: 'root'
})
export class MainControllerService extends MainController {

  constructor(router: AppRouterProvider) {
    super(router);
  }
}
