import { TestBed } from '@angular/core/testing';

import { ChatServiceProvider } from './chat-provider.service';

describe('ChatProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatServiceProvider = TestBed.get(ChatServiceProvider);
    expect(service).toBeTruthy();
  });
});
