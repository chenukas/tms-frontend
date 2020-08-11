import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLecComponent } from './manage-lec.component';

describe('ManageLecComponent', () => {
  let component: ManageLecComponent;
  let fixture: ComponentFixture<ManageLecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
