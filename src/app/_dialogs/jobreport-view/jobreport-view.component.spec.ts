import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobreportViewComponent } from './jobreport-view.component';

describe('JobreportViewComponent', () => {
  let component: JobreportViewComponent;
  let fixture: ComponentFixture<JobreportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobreportViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobreportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
