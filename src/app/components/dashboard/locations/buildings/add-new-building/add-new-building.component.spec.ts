import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBuildingComponent } from './add-new-building.component';

describe('AddNewBuildingComponent', () => {
  let component: AddNewBuildingComponent;
  let fixture: ComponentFixture<AddNewBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
