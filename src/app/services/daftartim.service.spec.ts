import { TestBed } from '@angular/core/testing';

import { DaftartimService } from './daftartim.service';

describe('DaftartimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaftartimService = TestBed.get(DaftartimService);
    expect(service).toBeTruthy();
  });
});
