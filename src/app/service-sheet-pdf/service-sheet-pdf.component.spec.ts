import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSheetPdfComponent } from './service-sheet-pdf.component';

describe('ServiceSheetPdfComponent', () => {
  let component: ServiceSheetPdfComponent;
  let fixture: ComponentFixture<ServiceSheetPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSheetPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSheetPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
