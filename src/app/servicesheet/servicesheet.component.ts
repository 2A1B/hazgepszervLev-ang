import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ServiceSheet} from '../_models/ServiceSheet';
import {JobReport} from '../_models/JobReport';

@Component({
  selector: 'app-servicesheet',
  templateUrl: './servicesheet.component.html',
  styleUrls: ['./servicesheet.component.css']
})
export class ServicesheetComponent implements OnInit {
  reports: Observable<any[]>;
  openedReports: Observable<any[]>;
  
  constructor(public db: AngularFireDatabase) {
  this.openedReports = db.list<JobReport>('jobreports', ref => ref.orderByChild('status').equalTo('open')).valueChanges();
   
    this.reports = db.list<ServiceSheet>('servicesheets', ref => ref.orderByChild('customer_name')).valueChanges();
  }
  ngOnInit() {
  }
  
  seePDF(uuid: string) {
  }
  
  seeQRcode(uuid: string) {
  }

}
