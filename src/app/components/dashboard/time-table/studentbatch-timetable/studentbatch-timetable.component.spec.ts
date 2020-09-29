import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbatchTimetableComponent } from './studentbatch-timetable.component';

describe('StudentbatchTimetableComponent', () => {
  let component: StudentbatchTimetableComponent;
  let fixture: ComponentFixture<StudentbatchTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentbatchTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbatchTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
