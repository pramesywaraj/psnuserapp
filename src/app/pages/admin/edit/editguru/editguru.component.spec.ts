import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditguruComponent } from './editguru.component';

describe('EditguruComponent', () => {
  let component: EditguruComponent;
  let fixture: ComponentFixture<EditguruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditguruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditguruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
