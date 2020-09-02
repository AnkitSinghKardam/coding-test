import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulLaunchComponent } from './successful-launch.component';

describe('SuccessfulLaunchComponent', () => {
  let component: SuccessfulLaunchComponent;
  let fixture: ComponentFixture<SuccessfulLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
