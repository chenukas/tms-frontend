import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLecComponent } from './update-lec.component';

describe('UpdateLecComponent', () => {
  let component: UpdateLecComponent;
  let fixture: ComponentFixture<UpdateLecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
