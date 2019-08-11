import { TestBed } from '@angular/core/testing';

import { PenginapanService } from './penginapan.service';

describe('PenginapanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PenginapanService = TestBed.get(PenginapanService);
    expect(service).toBeTruthy();
  });
});
