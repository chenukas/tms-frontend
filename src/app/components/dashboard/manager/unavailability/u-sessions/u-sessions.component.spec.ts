import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USessionsComponent } from './u-sessions.component';

describe('USessionsComponent', () => {
  let component: USessionsComponent;
  let fixture: ComponentFixture<USessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
