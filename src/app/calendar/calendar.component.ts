import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {JobReport} from '../_models/JobReport';

@Component({
  selector: 'app-calendar',
  template: `<angular2-fullcalendar [options]="calendarOptions"></angular2-fullcalendar>`
})
export class CalComponent {
  openedReports: Observable<any[]>;
  date = new Date();
  today = this.date.toLocaleDateString();
  start: string;
  end: string;
  reportEvents: Array<Object> = [];
  calendarOptions: Object;

  static onCalendarInit(initialized: boolean) {
    console.log('Calendar initialized');
  }

  constructor(public db: AngularFireDatabase) {
    this.openedReports = db.list<JobReport>('jobreports', ref => ref.orderByChild('status').equalTo('open')).valueChanges();
    this.openedReports.subscribe(jobreports => {
      jobreports.forEach( jobreport => {
        const date = new Date(jobreport.planned_delivery);
        this.start = date.toLocaleDateString('sq-AL') + 'T' + date.toLocaleTimeString();

        date.setHours(date.getHours() + 2);
        this.end = date.toLocaleDateString('sq-AL') + 'T' + date.toLocaleTimeString();

        console.log('Name: ', jobreport.customer_name, 'Start: ', this.start, 'End: ', this.end);

        const title = jobreport.customer_name + '\n'
          + jobreport.customer_address + '\n'
          + jobreport.customer_phone + '\n'
          + jobreport.problem_review;

        this.reportEvents.push({'title': title, 'start': this.start, 'end': this.end});
      });
    });
    this.calendarOptions = {
      locale: 'hu',
      height: '10',
      fixedWeekCount : false,
      defaultDate: this.today,
      editable: true,
      eventLimit: false,
      events: this.reportEvents
    };
  }
}
