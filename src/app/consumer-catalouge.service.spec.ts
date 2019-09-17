import { TestBed } from '@angular/core/testing';

import { ConsumerCatalougeService } from './consumer-catalouge.service';

describe('ConsumerCatalougeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumerCatalougeService = TestBed.get(ConsumerCatalougeService);
    expect(service).toBeTruthy();
  });
});
