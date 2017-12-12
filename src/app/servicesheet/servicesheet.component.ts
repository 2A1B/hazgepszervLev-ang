import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ServiceSheet} from '../_models/ServiceSheet';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-servicesheet',
  templateUrl: './servicesheet.component.html',
  styleUrls: ['./servicesheet.component.css']
})
export class ServicesheetComponent implements OnInit {
  reports: Observable<any[]>;
  qrtext: string;
  
  constructor(public db: AngularFireDatabase, private titleService: Title) {
    this.reports = db.list<ServiceSheet>('servicesheets', ref => ref.orderByChild('customer_name')).valueChanges();
  }
  
  ngOnInit() {
    this.titleService.setTitle('Munkalapok');
  }
  
  seePDF(uuid: string) {
  }
  
  seeQRcode(nev: string, cim: string, tel: string, did: string, elveg: string, anyag: string, ar: string, nap: string) {
    this.qrtext = 'Név: ' + nev + '\n'
      + 'Cím: ' + cim + '\n'
      + 'Telefonszám: ' + tel + '\n'
      + 'Munka megnevezése: ' + did + '\n'
      + 'Elvégzett munka: ' + elveg + '\n'
      + 'Felhasznált anyag: ' + anyag + '\n'
      + 'Javítás ára: ' + ar + '\n'
      + 'Elkészült: ' + nap;
  }

}
