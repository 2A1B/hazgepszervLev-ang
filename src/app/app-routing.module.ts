import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JobreportsComponent } from './jobreports/jobreports.component';
import { ServicesheetComponent } from './servicesheet/servicesheet.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: 'jobreports', component: JobreportsComponent, outlet: 'side' },
    { path: 'servicesheet', component: ServicesheetComponent, outlet: 'side' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
