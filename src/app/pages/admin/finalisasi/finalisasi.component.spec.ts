import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalisasiComponent } from './finalisasi.component';

describe('FinalisasiComponent', () => {
  let component: FinalisasiComponent;
  let fixture: ComponentFixture<FinalisasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalisasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalisasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
