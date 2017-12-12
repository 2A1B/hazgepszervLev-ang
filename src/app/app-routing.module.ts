import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JobreportsComponent } from './jobreports/jobreports.component';
import { ServicesheetComponent } from './servicesheet/servicesheet.component';
import { ServiceSheetPdfComponent } from './service-sheet-pdf/service-sheet-pdf.component';
import {CalComponent} from './calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'Bejelentkezés' } },
  { path: 'home', component: HomeComponent, children: [
    { path: 'jobreports', component: JobreportsComponent, outlet: 'side', data: { title: 'Hibajegyek' } },
    { path: 'servicesheet', component: ServicesheetComponent, outlet: 'side', data: { title: 'Munkalapok' } },
    { path: 'calendar', component: CalComponent, outlet: 'side', data: { title: 'Naptár' } }
    ]
  },
  { path: 'service/pdf/:id', component: ServiceSheetPdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
