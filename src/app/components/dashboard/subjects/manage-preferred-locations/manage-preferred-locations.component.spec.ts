import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePreferredLocationsComponent } from './manage-preferred-locations.component';

describe('ManagePreferredLocationsComponent', () => {
  let component: ManagePreferredLocationsComponent;
  let fixture: ComponentFixture<ManagePreferredLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePreferredLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePreferredLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
