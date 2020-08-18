import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBComponent } from './generate-b.component';

describe('GenerateBComponent', () => {
  let component: GenerateBComponent;
  let fixture: ComponentFixture<GenerateBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
