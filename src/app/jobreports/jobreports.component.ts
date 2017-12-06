import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {JobReport} from '../_models/JobReport';
import {NewServicesheetComponent} from "../_dialogs/new-servicesheet/new-servicesheet.component";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-jobreports',
  templateUrl: './jobreports.component.html',
  styleUrls: ['./jobreports.component.css']
})
export class JobreportsComponent implements OnInit {
  openedReports: Observable<any[]>;
  closedReports: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  constructor(public db: AngularFireDatabase,
              public dialog: MatDialog) {
    this.openedReports = db.list<JobReport>('jobreports', ref => ref.orderByChild('status').equalTo('open')).valueChanges();
    this.closedReports = db.list<JobReport>('jobreports', ref => ref.orderByChild('status').equalTo('closed')).valueChanges();
    this.itemsRef = db.list('jobreports');
  }

  ngOnInit() {
  }

  updateJobReportToClosed(key: string) {
    this.itemsRef.update(key, {status: 'closed'});
  }
  
  openNewServicesheetDialog(key: String) {
    const _dialog = this.dialog.open(NewServicesheetComponent, {
      data: {
        item: key
      }
    });
  }
}
