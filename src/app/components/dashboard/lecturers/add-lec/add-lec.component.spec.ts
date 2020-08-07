import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLecComponent } from './add-lec.component';

describe('AddLecComponent', () => {
  let component: AddLecComponent;
  let fixture: ComponentFixture<AddLecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
