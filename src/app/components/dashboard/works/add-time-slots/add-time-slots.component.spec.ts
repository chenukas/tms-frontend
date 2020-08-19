import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimeSlotsComponent } from './add-time-slots.component';

describe('AddTimeSlotsComponent', () => {
  let component: AddTimeSlotsComponent;
  let fixture: ComponentFixture<AddTimeSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTimeSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimeSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
