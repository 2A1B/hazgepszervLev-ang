import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobreportEditComponent } from './jobreport-edit.component';

describe('JobreportEditComponent', () => {
  let component: JobreportEditComponent;
  let fixture: ComponentFixture<JobreportEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobreportEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobreportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
