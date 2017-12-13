import { Component, OnInit, Inject } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ServiceSheet} from "../../_models/ServiceSheet";
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-jobreport-view',
  templateUrl: './jobreport-view.component.html',
  styleUrls: ['./jobreport-view.component.css']
})
export class JobreportViewComponent implements OnInit {

  itemsRef: AngularFireList<any>;
  today: string;
  jobreportKey: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<JobreportViewComponent>,
              public db: AngularFireDatabase) {
    this.itemsRef = db.list('servicesheets');
    this.jobreportKey = data.item;
  }

  ngOnInit() {
  }
}
