import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHomepageComponent } from './footer-homepage.component';

describe('FooterHomepageComponent', () => {
  let component: FooterHomepageComponent;
  let fixture: ComponentFixture<FooterHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
