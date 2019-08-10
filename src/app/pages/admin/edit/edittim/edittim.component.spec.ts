import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittimComponent } from './edittim.component';

describe('EdittimComponent', () => {
  let component: EdittimComponent;
  let fixture: ComponentFixture<EdittimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
