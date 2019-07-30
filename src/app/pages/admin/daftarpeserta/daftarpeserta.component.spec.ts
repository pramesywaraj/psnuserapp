import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarpesertaComponent } from './daftarpeserta.component';

describe('DaftarpesertaComponent', () => {
  let component: DaftarpesertaComponent;
  let fixture: ComponentFixture<DaftarpesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarpesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarpesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
