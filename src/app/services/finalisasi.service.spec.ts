import { TestBed } from '@angular/core/testing';

import { FinalisasiService } from './finalisasi.service';

describe('FinalisasiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinalisasiService = TestBed.get(FinalisasiService);
    expect(service).toBeTruthy();
  });
});
