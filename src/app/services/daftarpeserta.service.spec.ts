import { TestBed } from '@angular/core/testing';

import { DaftarpesertaService } from './daftarpeserta.service';

describe('DaftarpesertaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaftarpesertaService = TestBed.get(DaftarpesertaService);
    expect(service).toBeTruthy();
  });
});
