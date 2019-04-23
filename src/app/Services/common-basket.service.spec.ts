import { TestBed } from '@angular/core/testing';

import { CommonBasketService } from './common-basket.service';

describe('CommonBasketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonBasketService = TestBed.get(CommonBasketService);
    expect(service).toBeTruthy();
  });
});
