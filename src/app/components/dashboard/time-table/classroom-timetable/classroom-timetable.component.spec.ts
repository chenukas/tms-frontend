import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomTimetableComponent } from './classroom-timetable.component';

describe('ClassroomTimetableComponent', () => {
  let component: ClassroomTimetableComponent;
  let fixture: ComponentFixture<ClassroomTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
