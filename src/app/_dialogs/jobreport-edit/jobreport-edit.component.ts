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
    const ddd = this.jobreport.customer_name;
    this.itemsRef = db.list('jobreports');
  }

  ngOnInit() {
  }
  
  public editJobreport( cn: string, ca: string,
                       cp: string, pr: string,
                       pd: string, key: string) {
    const itemORef = db.object('key');
    this.itemsORef.update({ customer_name: cn });
    this.itemsORef.update({ customer_address: ca });
    this.itemsORef.update({ customer_phone: cp });
    this.itemsORef.update({ problem_review: pr });
    this.itemsORef.update({ planned_delivery: pd });
  }

}
