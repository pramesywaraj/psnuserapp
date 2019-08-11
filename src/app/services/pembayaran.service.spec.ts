import { TestBed } from '@angular/core/testing';

import { PembayaranService } from './pembayaran.service';

describe('PembayaranService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PembayaranService = TestBed.get(PembayaranService);
    expect(service).toBeTruthy();
  });
});
