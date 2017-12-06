import { Component, OnInit, Inject } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ServiceSheet} from "../../_models/ServiceSheet";
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-new-servicesheet',
  templateUrl: './new-servicesheet.component.html',
  styleUrls: ['./new-servicesheet.component.css']
})
export class NewServicesheetComponent implements OnInit {
  itemsRef: AngularFireList<any>;
  reports: Observable<any[]>;
  jobreportKey: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<NewServicesheetComponent>,
              public db: AngularFireDatabase) {
    this.itemsRef = db.list('servicesheets');
    this.jobreportKey = data;
    // this.reports = db.list<ServiceSheet>('servicesheets', ref => ref.orderByChild('uuid').equalTo(this.data)).valueChanges();
  }

  ngOnInit() {
  }

  public newServiceSheet( cn: string, ca: string,
                       cp: string, pd: string,
                       pr: string, ug:string,
                       ar: string) {
    const refi = this.db.list('servicesheets').query.ref.push();
    this.itemsRef.push(new ServiceSheet(cn, ca, cp, pr, pd, ug, ar, this.jobreportKey.toString()));
  }
}
