import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarguruComponent } from './daftarguru.component';

describe('DaftarguruComponent', () => {
  let component: DaftarguruComponent;
  let fixture: ComponentFixture<DaftarguruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarguruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarguruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
