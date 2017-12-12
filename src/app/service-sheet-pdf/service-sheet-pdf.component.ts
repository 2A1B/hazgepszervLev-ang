import { Component, Input } from '@angular/core';
import {ServiceSheet} from '../_models/ServiceSheet';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-service-sheet-pdf',
  template: `
    <img style="width: 20px; height: 20px; margin-right: 5px;" src="/assets/images/pdf.png">
    <a (click)="seePDF(value)" target="_blank">Munkalap letöltése</a>
  `
})
export class ServiceSheetPdfComponent {
  @Input() value: ServiceSheet;
  date = new Date();
  today = this.date.toLocaleDateString();
  constructor() {
  }

  repleceChar(value: string, what: string){
  }

  seePDF(sheet: ServiceSheet) {

    const doc = new jsPDF();
    doc.text(20, 20, sheet.customer_name);
    doc.text(20, 30, sheet.customer_address);
    const name = sheet.customer_name;
    const now = this.today.replace('.', '-');
    console.log(now);
    // doc.save(fileName);
  }
}
