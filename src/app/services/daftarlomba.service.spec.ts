import { TestBed } from '@angular/core/testing';

import { DaftarlombaService } from './daftarlomba.service';

describe('DaftarlombaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaftarlombaService = TestBed.get(DaftarlombaService);
    expect(service).toBeTruthy();
  });
});
