import { Component, OnInit } from '@angular/core';
import { MainController } from 'black-door-chat-mvc/dist/main/controller/main.controller';
import { MainView } from 'black-door-chat-mvc/dist/main/view/main.view.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, MainView {
  private controller: MainController;

  constructor(controller: MainController) {
    this.controller = controller;
  }

  ngOnInit() {
  }

  onCreateNewRoom(): void {
    this.controller.createNewRoom();
  }
  onJoinAnExistingRoom(): void {
    this.controller.joinAnExistingRoom();
  }

}
