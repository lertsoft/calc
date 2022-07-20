import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NumberComponent } from './number/number.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/calc', pathMatch: 'full'},
  { path: 'calc', component: NumberComponent},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
