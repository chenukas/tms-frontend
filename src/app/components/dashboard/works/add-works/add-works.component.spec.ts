import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorksComponent } from './add-works.component';

describe('AddWorksComponent', () => {
  let component: AddWorksComponent;
  let fixture: ComponentFixture<AddWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
