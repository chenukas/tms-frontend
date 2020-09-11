import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelSComponent } from './parallel-s.component';

describe('ParallelSComponent', () => {
  let component: ParallelSComponent;
  let fixture: ComponentFixture<ParallelSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
