import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ServiceSheet} from "../../_models/ServiceSheet";
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { JobReport } from '../../_models/JobReport';

@Component({
  selector: 'app-jobreport-edit',
  templateUrl: './jobreport-edit.component.html',
  styleUrls: ['./jobreport-edit.component.css']
})
export class JobreportEditComponent implements OnInit {

  jobreport: JobReport;
  itemsRef: AngularFireList<any>;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<JobreportEditComponent>,
              public db: AngularFireDatabase) {
    this.jobreport = data.item;
    this.itemsRef = db.list('jobreports');
  }

  ngOnInit() {
  }
  
  public editJobreport( cn: string, ca: string,
                       cp: string, pr: string,
                       pd: string, key: string) {
    this.itemsRef.update(key, { customer_name: cn,
                                customer_address: ca,
                                customer_phone: cp,
                                problem_review: pr,
                                planned_delivery: pd });
  }

}
