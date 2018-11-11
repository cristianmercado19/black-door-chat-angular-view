import { TestBed } from '@angular/core/testing';

import { MessageBuilderServiceProvider } from './message-builder-provider.service';

describe('MessageBuilderProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageBuilderServiceProvider = TestBed.get(MessageBuilderServiceProvider);
    expect(service).toBeTruthy();
  });
});
