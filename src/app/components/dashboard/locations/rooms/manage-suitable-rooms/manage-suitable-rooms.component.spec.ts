import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSuitableRoomsComponent } from './manage-suitable-rooms.component';

describe('ManageSuitableRoomsComponent', () => {
  let component: ManageSuitableRoomsComponent;
  let fixture: ComponentFixture<ManageSuitableRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSuitableRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSuitableRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
