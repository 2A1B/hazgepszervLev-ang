import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServicesheetComponent } from './new-servicesheet.component';

describe('NewServicesheetComponent', () => {
  let component: NewServicesheetComponent;
  let fixture: ComponentFixture<NewServicesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewServicesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewServicesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
