import { Component, OnInit, Inject } from '@angular/core';
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

  jobreport: JobReport;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<JobreportViewComponent>) {
    this.jobreport = data.item;
    const ddd = this.jobreport.customer_name;
  }

  ngOnInit() {
  }
}
