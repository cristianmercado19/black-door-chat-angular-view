import { TestBed } from '@angular/core/testing';

import { CreateRoomControllerService } from './create-room-controller.service';

describe('CreateRoomControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateRoomControllerService = TestBed.get(CreateRoomControllerService);
    expect(service).toBeTruthy();
  });
});
