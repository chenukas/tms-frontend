import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGroupsComponent } from './sub-groups.component';

describe('SubGroupsComponent', () => {
  let component: SubGroupsComponent;
  let fixture: ComponentFixture<SubGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
