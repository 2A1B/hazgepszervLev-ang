import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServicesheetComponent } from './edit-servicesheet.component';

describe('EditServicesheetComponent', () => {
  let component: EditServicesheetComponent;
  let fixture: ComponentFixture<EditServicesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServicesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServicesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
