import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpesertaComponent } from './editpeserta.component';

describe('EditpesertaComponent', () => {
  let component: EditpesertaComponent;
  let fixture: ComponentFixture<EditpesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
