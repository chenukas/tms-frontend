import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubComponent } from './manage-sub.component';

describe('ManageSubComponent', () => {
  let component: ManageSubComponent;
  let fixture: ComponentFixture<ManageSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
