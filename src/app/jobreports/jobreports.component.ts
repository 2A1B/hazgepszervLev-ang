import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {JobReport} from '../_models/JobReport';
import {NewServicesheetComponent} from '../_dialogs/new-servicesheet/new-servicesheet.component';
import {JobreportViewComponent} from '../_dialogs/jobreport-view/jobreport-view.component';
import {JobreportEditComponent} from '../_dialogs/jobreport-edit/jobreport-edit.component';
import {MatDialog} from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import {MapComponent} from '../_dialogs/map/map.component';

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

  deleteJobReport(key: string) {
    this.itemsRef.remove(key);
  }

  openNewServicesheetDialog(key: JobReport) {
    const _dialog = this.dialog.open(NewServicesheetComponent, {
      data: {
        item: key
      }
    });
  }

  openJobreportView(key: JobReport) {
    const _dialog = this.dialog.open(JobreportViewComponent, {
      data: {
        item: key
      }
    });
  }

  editJobReport(key: JobReport) {
    const _dialog = this.dialog.open(JobreportEditComponent, {
      data: {
        item: key
      }
    });
  }

  openMap(address: string) {
    const _dialog = this.dialog.open(MapComponent, {
      data: {
        item: address
      }
    });
  }
}
