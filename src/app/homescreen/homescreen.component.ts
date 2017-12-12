import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AngularFireDatabase} from 'angularfire2/database';
import {JobReport} from '../_models/JobReport';
import {Observable} from 'rxjs/Observable';
import {ServiceSheet} from '../_models/ServiceSheet';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  openedReports: Observable<any[]>;
  openedReportsInThisDay: Array<JobReport>;
  closedReports: Observable<any[]>;
  reports: Observable<any[]>;
  closedInThisMonth = 0;
  openedReportsCount = 0;
  incomeInThisMonth = 0;
  incomeAll = 0;
  constructor(public db: AngularFireDatabase, private titleService: Title) {
    this.openedReports = db.list<JobReport>('jobreports', ref => ref.orderByChild('status').equalTo('open')).valueChanges();
    this.closedReports = db.list<JobReport>('jobreports', ref => ref.orderByChild('status').equalTo('closed')).valueChanges();
    this.reports = db.list<ServiceSheet>('servicesheets').valueChanges();
    this.closedReports.subscribe(jobreports => {
      jobreports.forEach( jobreport => {
        const today = new Date();
        const reportDate = new Date(jobreport.planned_delivery);
        const yearMonth = today.getFullYear() + today.getMonth();
        const reportYearMonth = reportDate.getFullYear() + reportDate.getMonth();
        if ( yearMonth === reportYearMonth ) {
          this.closedInThisMonth += 1;
        }
      });
    });
    this.openedReports.subscribe(jobreports => {
      jobreports.forEach( jobreport => {
        this.openedReportsCount += 1;
        const today = new Date();
        const reportDate = new Date(jobreport.planned_delivery);
        const yearMonth = today.getFullYear() + today.getMonth() + today.getDate();
        const reportYearMonth = reportDate.getFullYear() + reportDate.getMonth() + reportDate.getDate();
        if ( yearMonth === reportYearMonth ) {
          this.openedReportsInThisDay.push(jobreport);
        }
      });
    });
    this.reports.subscribe(servicesheets => {
      servicesheets.forEach( servicesheet => {
        const priceNumber = +servicesheet.price;
        this.incomeAll += priceNumber;
        const today = new Date();
        const reportDate = new Date(servicesheet.day);
        const yearMonth = today.getFullYear() + today.getMonth();
        const reportYearMonth = reportDate.getFullYear() + reportDate.getMonth();
        if ( yearMonth === reportYearMonth ) {
          this.incomeInThisMonth += priceNumber;
        }
      });
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Kezdőlap');
  }

}
