import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ServiceSheet} from '../_models/ServiceSheet';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-service-sheet-pdf',
  templateUrl: './service-sheet-pdf.component.html',
  styleUrls: ['./service-sheet-pdf.component.css']
})
export class ServiceSheetPdfComponent implements OnInit {

  public id: string;
  reports: Observable<any[]>;
  today: string;

  constructor(public db: AngularFireDatabase,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.reports = db.list<ServiceSheet>('servicesheets', ref => ref.orderByChild('uuid').equalTo(this.id)).valueChanges();
    });
    const date = new Date();
    this.today = date.toLocaleDateString();
    ;
  }
  
  ngOnInit() {
  }

}
