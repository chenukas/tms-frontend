import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSemsComponent } from './year-sems.component';

describe('YearSemsComponent', () => {
  let component: YearSemsComponent;
  let fixture: ComponentFixture<YearSemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearSemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearSemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
