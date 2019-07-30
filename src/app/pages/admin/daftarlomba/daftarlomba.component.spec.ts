import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarlombaComponent } from './daftarlomba.component';

describe('DaftarlombaComponent', () => {
  let component: DaftarlombaComponent;
  let fixture: ComponentFixture<DaftarlombaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarlombaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarlombaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
