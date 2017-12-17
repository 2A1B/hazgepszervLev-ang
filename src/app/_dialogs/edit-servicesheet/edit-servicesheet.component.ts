import {Component, Inject, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ServiceSheet} from '../../_models/ServiceSheet';

@Component({
  selector: 'app-edit-servicesheet',
  templateUrl: './edit-servicesheet.component.html',
  styleUrls: ['./edit-servicesheet.component.css']
})
export class EditServicesheetComponent implements OnInit {
  itemsRef: AngularFireList<any>;
  sheet: ServiceSheet;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<EditServicesheetComponent>,
              public db: AngularFireDatabase) {
    this.itemsRef = db.list('servicesheets');
    this.sheet = data.item;
  }

  ngOnInit() {
  }

  editSheet(cn: string, ca: string, cp: string, pd: string, pr: string, ug: string, ar: string, key: string) {
    this.itemsRef.update(key, {customer_name: cn,
                                    customer_address: ca,
                                    customer_phone: cp,
                                    problem_review: pr,
                                    did_job: pd,
                                    used_goods: ug,
                                    price: ar,
    });
  }
}
