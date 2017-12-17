import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA, MatDatepicker} from '@angular/material';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {JobReport} from '../../_models/JobReport';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-new-jobreport',
  templateUrl: './new-jobreport.component.html',
  styleUrls: ['./new-jobreport.component.css']
})
export class NewJobreportComponent implements OnInit {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  myControl: FormControl = new FormControl();
  options = [
    'szervíz',
    'helyszíni',
    'felmérés',
    'más'
  ];
  startDate = new Date();
  itemsRef: AngularFireList<any>;
  constructor(public dialog: MatDialogRef<NewJobreportComponent>, public db: AngularFireDatabase) {
    this.itemsRef = db.list('jobreports');
  }

  ngOnInit() {
  }

  public newJobreport( cn: string, ca: string,
                       cp: string, pr: string,
                       pd: string, job_title: string) {
    const id = this.itemsRef.push(new JobReport(cn, ca, cp, pd, pr, job_title, 'open', '')).key;
    this.itemsRef.update(id, {uuid: id});
  }
}
