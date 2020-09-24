import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UBatchesComponent } from './u-batches.component';

describe('UBatchesComponent', () => {
  let component: UBatchesComponent;
  let fixture: ComponentFixture<UBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
