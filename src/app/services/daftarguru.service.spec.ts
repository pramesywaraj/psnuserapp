import { TestBed } from '@angular/core/testing';

import { DaftarguruService } from './daftarguru.service';

describe('DaftarguruService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaftarguruService = TestBed.get(DaftarguruService);
    expect(service).toBeTruthy();
  });
});
