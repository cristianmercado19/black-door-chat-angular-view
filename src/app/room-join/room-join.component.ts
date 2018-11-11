import { RoomJoinController } from 'black-door-chat-mvc/dist/room-join/controller/room-join.controller';
import { RoomJoinView } from 'black-door-chat-mvc/dist/room-join/view/room-join.view.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { KeyComponent } from '../key/key.component';

@Component({
  selector: 'app-room-join',
  templateUrl: './room-join.component.html',
  styleUrls: ['./room-join.component.scss']
})
export class RoomJoinComponent implements OnInit, RoomJoinView {

  controller: RoomJoinController;

  // error
  showError = false;
  errorMessage = '';

  // warning
  showWarning = false;
  warningMessage = '';

  // first key
  @ViewChild('firstKeyComponent')
  firstKeyComponent: KeyComponent;
  showFirstKeyComponent = true;

  // second key
  @ViewChild('secondKeyComponent')
  secondKeyComponent: KeyComponent;
  showSecondKeyComponent = false;

  // loading
  showLoading = false;
  loadingMessage = '';

  // instructions
  showNextStepInstructions = false;

  constructor(controller: RoomJoinController) {
    this.controller = controller;
  }

  ngOnInit() {
    this.controller.init(this);
  }

  getFirstKey(): string {
    return this.firstKeyComponent.key;
  }

  hideErrorMessages(): void {
    this.showError = false;
  }

  hideWarningMessages(): void {
    this.showWarning = false;
  }

  hideFirstKey(): void {
    this.showFirstKeyComponent = false;
  }

  showCreatingSecondKey(): void {
    this.showLoading = true;
    this.loadingMessage = 'Creating second key...';
  }

  hideCreatingSecondKey(): void {
    this.showLoading = false;
  }

  showInstructions(): void {
    this.showNextStepInstructions = true;
  }

  setSecondKey(key: string): void {
    this.secondKeyComponent.key = key;
    this.showSecondKeyComponent = true;
  }

  onFirstKeyHasBeenEntered(): void {
    this.controller.firstKeyHasBeenEntered();
  }

  showFirstKey(): void {
    this.showFirstKeyComponent = true;
  }

  showErrorMessageAnswerHasNotBeenCreated(): void {
    this.errorMessage = 'An error ocurred during the answer creation process, verify the primary key and try again.';
    this.showError = true;
  }
}
