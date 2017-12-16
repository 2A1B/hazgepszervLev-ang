import { Component, Input } from '@angular/core';
import {ServiceSheet} from '../_models/ServiceSheet';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-service-sheet-pdf',
  template: `
    <button mat-button (click)="seePDF(value)">PDF</button>
  `
})
export class ServiceSheetPdfComponent {
  @Input() value: ServiceSheet;
  date = new Date();
  today = this.date.toLocaleDateString('sq-AL');
  constructor() {
  }

  replaceWhiteSpace(s: string) {
    return s && s.replace(' ', '');
  }

  seePDF(sheet: ServiceSheet) {

    const doc = new jsPDF();
    doc.setFontSize(30);
    doc.text(55, 25, 'Háztartási Gépszerviz');
    doc.setFontSize(25);
    doc.text(85, 40, 'Munkalap');

    doc.setFontSize(17);
    doc.text(20, 70, 'Megrendelo neve:');
    doc.text(100, 70, sheet.customer_name);
    doc.text(20, 80, 'Cim:');
    doc.text(100, 80, sheet.customer_address);
    doc.text(20, 90, 'Telefonszam:');
    doc.text(100, 90, sheet.customer_phone);
    doc.text(20, 100, 'Munka megnevezese:');
    doc.text(100, 100, sheet.did_job);
    doc.text(20, 110, 'Hibajelenseg:');
    doc.text(100, 110, sheet.problem_review);
    doc.text(20, 120, 'Felhasznalt anyag:');
    doc.text(100, 120, sheet.used_goods);
    doc.text(20, 130, 'Javitas ara:');
    doc.text(100, 130, sheet.price);

    doc.setFontSize(15);
    doc.text(20, 160, 'Kerem orizze meg a munkalapot!');
    doc.text(20, 170, 'Az ar tartalmazza a kiszallasi dijat, alkatresz arat es a munkadijat!');
    doc.text(20, 180, 'Garancia kizarolag a javitott vagy cserelt alkatreszekre vonatkozik! /6 honap/');
    doc.text(130, 200, '_________________');
    doc.text(139, 210, 'Szabo Tamas');
    doc.setFontSize(13);
    doc.text(140, 220, 'Szerviz vezeto');
    doc.text(20, 250, 'Haztartasi Gepszerviz \n' +
      '4254 Nyiradony, Jozsef Attila utca 58.\n' +
      'Telefonszam: 0630-590-8137 \n' +
      'Weblap: www.hazgepszerv.hu \n' +
      'E-mail: info@hazgepszerv.hu');
    doc.text(130, 290, 'Datum:');
    doc.text(146, 290, sheet.day);

    const fileName = this.replaceWhiteSpace(sheet.customer_name) + '_' + this.today;
    console.log(fileName);
    doc.save(fileName);
  }
}
