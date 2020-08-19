import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorksComponent } from './update-works.component';

describe('UpdateWorksComponent', () => {
  let component: UpdateWorksComponent;
  let fixture: ComponentFixture<UpdateWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
