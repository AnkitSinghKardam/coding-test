import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulLandingComponent } from './successful-landing.component';

describe('SuccessfulLandingComponent', () => {
  let component: SuccessfulLandingComponent;
  let fixture: ComponentFixture<SuccessfulLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
