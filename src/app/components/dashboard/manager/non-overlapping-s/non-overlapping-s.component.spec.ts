import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonOverlappingSComponent } from './non-overlapping-s.component';

describe('NonOverlappingSComponent', () => {
  let component: NonOverlappingSComponent;
  let fixture: ComponentFixture<NonOverlappingSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonOverlappingSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonOverlappingSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
