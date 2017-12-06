import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobreportComponent } from './new-jobreport.component';

describe('NewJobreportComponent', () => {
  let component: NewJobreportComponent;
  let fixture: ComponentFixture<NewJobreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJobreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
