import { TestBed } from '@angular/core/testing';

import { WhoWantsServiceService } from './who-wants-service.service';

describe('WhoWantsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhoWantsServiceService = TestBed.get(WhoWantsServiceService);
    expect(service).toBeTruthy();
  });
});
