import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {JobReport} from '../_models/JobReport';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-jobreports',
  templateUrl: './jobreports.component.html',
  styleUrls: ['./jobreports.component.css']
})
export class JobreportsComponent implements OnInit {
  openedReports: Observable<any[]>;
  closedReports: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.openedReports = db.list<JobReport>('jobreports', ref => ref.orderByChild('status').equalTo('open')).valueChanges();
    this.closedReports = db.list<JobReport>('jobreports', ref => ref.orderByChild('status').equalTo('closed')).valueChanges();
  }

  ngOnInit() {
  }

  updateJobReportToClosed(key: string) {
    const itemRef = this.db.list('jobreports');
    itemRef.update(key, {status: 'closed'});
  }
}
