import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {JobReport} from '../_models/JobReport';
import {NewServicesheetComponent} from "../_dialogs/new-servicesheet/new-servicesheet.component";
import {JobreportViewComponent} from "../_dialogs/jobreport-view/jobreport-view.component";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ServiceSheet } from '../_models/ServiceSheet';

@Component({
  selector: 'app-jobreports',
  templateUrl: './jobreports.component.html',
  styleUrls: ['./jobreports.component.css']
})
export class JobreportsComponent implements OnInit {
  openedReports: Observable<any[]>;
  closedReports: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  constructor(public db: AngularFireDatabase, public dialog: MatDialog, private titleService: Title) {
    this.openedReports = db.list<JobReport>('jobreports', ref => ref.orderByChild('status').equalTo('open')).valueChanges();
    this.closedReports = db.list<JobReport>('jobreports', ref => ref.orderByChild('status').equalTo('closed')).valueChanges();
    this.itemsRef = db.list('jobreports');
  }

  ngOnInit() {
    this.titleService.setTitle('Hibajegyek');
  }

  updateJobReportToClosed(key: string) {
    this.itemsRef.update(key, {status: 'closed'});
  }

  openNewServicesheetDialog(key: JobReport) {
    const _dialog = this.dialog.open(NewServicesheetComponent, {
      data: {
        item: key
      }
    });
  }
  
  openJobreportView(key: string) {
    const _dialog = this.dialog.open(JobreportViewComponent, {
      data: {
        item: key
      }
    });
  }
}
