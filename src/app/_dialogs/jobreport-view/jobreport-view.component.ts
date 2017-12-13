import { Component, OnInit, Inject } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ServiceSheet} from "../../_models/ServiceSheet";
import {Observable} from 'rxjs/Observable';
import { JobReport } from '../../_models/JobReport';

@Component({
  selector: 'app-jobreport-view',
  templateUrl: './jobreport-view.component.html',
  styleUrls: ['./jobreport-view.component.css']
})
export class JobreportViewComponent implements OnInit {

  itemsRef: AngularFireList<any>;
  today: string;
  jobreport: JobReport;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<JobreportViewComponent>,
              public db: AngularFireDatabase) {
    this.itemsRef = db.list('servicesheets');
    this.jobreport = data.item;
    const ddd = this.jobreport.customer_name;
  }

  ngOnInit() {
  }
}
