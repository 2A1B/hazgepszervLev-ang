import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AF } from '../providers/af';
import { MapService } from '../providers/MapService';
import { AgmCoreModule } from '@agm/core';
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
import { JobreportViewComponent } from './_dialogs/jobreport-view/jobreport-view.component';
import { CalComponent } from './calendar/calendar.component';
import { QrcodeComponent} from './qrcode/qrcode.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { MapComponent } from './_dialogs/map/map.component';
import { JobreportEditComponent } from './_dialogs/jobreport-edit/jobreport-edit.component';
import { EditServicesheetComponent } from './_dialogs/edit-servicesheet/edit-servicesheet.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatDatepickerModule, MAT_DATE_LOCALE
} from '@angular/material';

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
    HomescreenComponent,
    JobreportViewComponent,
    MapComponent,
    JobreportEditComponent,
    EditServicesheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    PdfViewerModule,
    QRCodeModule,
    CalendarModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [AF,
    MapService,
    {provide: MAT_DATE_LOCALE, useValue: 'hu-HU'},
  ],
  bootstrap: [AppComponent],
  entryComponents: [NewJobreportComponent,
                    NewServicesheetComponent,
                    JobreportViewComponent,
                    JobreportEditComponent,
                    MapComponent,
                    EditServicesheetComponent]
})
export class AppModule { }
