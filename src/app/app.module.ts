import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AF } from '../providers/af';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { JobreportsComponent } from './jobreports/jobreports.component';
import {NewJobreportComponent} from './_dialogs/new-jobreport/new-jobreport.component';
import { ServicesheetComponent } from './servicesheet/servicesheet.component';
import { ServiceSheetPdfComponent } from './service-sheet-pdf/service-sheet-pdf.component';

import { MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
  MatPaginatorModule } from '@angular/material';

export const config = {
  apiKey: 'AIzaSyCSN7GoO1ms8duwyDfMb6S5uS9B9QcKLOg',
  authDomain: 'hazgepszerv-f2543.firebaseapp.com',
  databaseURL: 'https://hazgepszerv-f2543.firebaseio.com',
  projectId: 'hazgepszerv-f2543',
  storageBucket: 'hazgepszerv-f2543.appspot.com',
  messagingSenderId: '532373037664'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    JobreportsComponent,
    NewJobreportComponent,
    ServicesheetComponent,
    ServiceSheetPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatPaginatorModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    PdfViewerModule
  ],
  providers: [AF],
  bootstrap: [AppComponent],
  entryComponents: [NewJobreportComponent]
})
export class AppModule { }
