import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftartimComponent } from './daftartim.component';

describe('DaftartimComponent', () => {
  let component: DaftartimComponent;
  let fixture: ComponentFixture<DaftartimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftartimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftartimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
