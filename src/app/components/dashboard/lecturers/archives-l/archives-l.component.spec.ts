import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesLComponent } from './archives-l.component';

describe('ArchivesLComponent', () => {
  let component: ArchivesLComponent;
  let fixture: ComponentFixture<ArchivesLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
