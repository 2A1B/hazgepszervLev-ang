import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewJobreportComponent} from "../_dialogs/new-jobreport/new-jobreport.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private menus: any;
  jobreportLink: string;
  isDarkTheme = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.jobreportLink = '[\'/home\', {outlets: {\'side\': [\'jobreports\']}}]';
  }

  openNewJobreportDialog() {
    const _dialog = this.dialog.open(NewJobreportComponent);
  }

}
