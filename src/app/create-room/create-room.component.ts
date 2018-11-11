import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateRoomView } from 'black-door-chat-mvc/dist/create-room/view/create-room.view.interface';
import { CreateRoomController } from 'black-door-chat-mvc/dist/create-room/controller/create-room.controller';
import { KeyComponent } from '../key/key.component';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit, CreateRoomView {

  controller: CreateRoomController;

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

  constructor(controller: CreateRoomController) {
    this.controller = controller;
  }

  ngOnInit() {
    this.controller.init(this);
  }

  showErrorMessageInvalidSecondKeyForThisRoom(): void {
    this.errorMessage = 'The second key is invalid for this room.';
    this.showError = true;
  }

  showWarningMessageSecondKeyShouldNotBeEmpty(): void {
    this.warningMessage = 'You should enter a second key to proceed. The second key is created by your partner.';
    this.showWarning = true;
  }

  showErrorMessageFirstKeyCanNotBeCreated(): void {
    this.errorMessage = 'The first key could not be created.';
    this.showError = true;
  }

  getSecondKey(): string {
    return this.secondKeyComponent.key;
  }

  showOpeningRoom(): void {
    this.loadingMessage = 'Opening room...';
    this.showLoading = true;
  }

  showSecondKey(): void {
    this.showSecondKeyComponent = true;
  }

  hideFirstKey(): void {
    this.showFirstKeyComponent = false;
  }

  shareKeyByEmail(firstKey: string): void {
    console.warn('Method not implemented.');
  }

  showCreatingRoom(): void {
    this.loadingMessage = 'Creating room...';
    this.showLoading = true;
  }

  hideCreatingRoom(): void {
    this.showLoading = false;
  }

  showFirstKey(firstKey: string): void {
    this.firstKeyComponent.key = firstKey;
  }

  onSharePrimaryKey(): void {
    console.warn('Method not implemented.');
  }

  onFirstKeyHasBeenShared(): void {
    this.controller.firstKeyHasBeenShared();
  }

  onSecondKeyIsEntered(): void {
    this.controller.secondKeyIsEntered();
  }

  hideWarningMessages(): void {
    this.showWarning = false;
  }
  hideErrorMessages(): void {
    this.showError = false;
  }
  hideOpeningRoom(): void {
    this.showLoading = false;
  }

}
