import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { AboutComponent } from './about/about.component';
// import { UpdateComponent } from './update/update.component';
import { ServiceUpdateComponent } from './service-update/service-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    AboutComponent,
    // UpdateComponent,
    ServiceUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
