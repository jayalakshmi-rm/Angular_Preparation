import { TestBed } from '@angular/core/testing';

import { SharedEventBusService } from './shared-event-bus.service';

describe('SharedEventBusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedEventBusService = TestBed.get(SharedEventBusService);
    expect(service).toBeTruthy();
  });
});
