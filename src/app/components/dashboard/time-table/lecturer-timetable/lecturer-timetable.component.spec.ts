import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerTimetableComponent } from './lecturer-timetable.component';

describe('LecturerTimetableComponent', () => {
  let component: LecturerTimetableComponent;
  let fixture: ComponentFixture<LecturerTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
