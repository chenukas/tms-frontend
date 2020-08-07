import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLecComponent } from './view-lec.component';

describe('ViewLecComponent', () => {
  let component: ViewLecComponent;
  let fixture: ComponentFixture<ViewLecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
