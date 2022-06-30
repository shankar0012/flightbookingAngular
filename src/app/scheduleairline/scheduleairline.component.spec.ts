import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleairlineComponent } from './scheduleairline.component';

describe('ScheduleairlineComponent', () => {
  let component: ScheduleairlineComponent;
  let fixture: ComponentFixture<ScheduleairlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleairlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
