import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AF } from '../providers/af';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { JobreportsComponent } from './jobreports/jobreports.component';

import { MatButtonModule,
  MatCardModule,
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
  MatToolbarModule } from '@angular/material';

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
    JobreportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
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
    FlexLayoutModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
