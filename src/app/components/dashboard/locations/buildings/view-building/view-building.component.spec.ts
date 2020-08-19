import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuildingComponent } from './view-building.component';

describe('ViewBuildingComponent', () => {
  let component: ViewBuildingComponent;
  let fixture: ComponentFixture<ViewBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
