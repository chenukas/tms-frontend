import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ULecturersComponent } from './u-lecturers.component';

describe('ULecturersComponent', () => {
  let component: ULecturersComponent;
  let fixture: ComponentFixture<ULecturersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ULecturersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ULecturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
