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
import { QRCodeModule } from 'angular2-qrcode';
import {CalendarModule} from 'ap-angular2-fullcalendar';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { JobreportsComponent } from './jobreports/jobreports.component';
import { NewJobreportComponent } from './_dialogs/new-jobreport/new-jobreport.component';
import { ServicesheetComponent } from './servicesheet/servicesheet.component';
import { ServiceSheetPdfComponent } from './service-sheet-pdf/service-sheet-pdf.component';
import { NewServicesheetComponent } from './_dialogs/new-servicesheet/new-servicesheet.component';
import { CalComponent } from './calendar/calendar.component';
import { QrcodeComponent} from './qrcode/qrcode.component';

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
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    JobreportsComponent,
    NewJobreportComponent,
    ServicesheetComponent,
    ServiceSheetPdfComponent,
    NewServicesheetComponent,
    QrcodeComponent,
    CalComponent,
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
    PdfViewerModule,
    QRCodeModule,
    CalendarModule
  ],
  providers: [AF],
  bootstrap: [AppComponent],
  entryComponents: [NewJobreportComponent,
                    NewServicesheetComponent]
})
export class AppModule { }
