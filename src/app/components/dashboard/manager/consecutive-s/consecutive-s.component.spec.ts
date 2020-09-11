import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsecutiveSComponent } from './consecutive-s.component';

describe('ConsecutiveSComponent', () => {
  let component: ConsecutiveSComponent;
  let fixture: ComponentFixture<ConsecutiveSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsecutiveSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsecutiveSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
