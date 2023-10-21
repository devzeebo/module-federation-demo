import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MfExposedModule } from './mf-exposed/mfexposed.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MfExposedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
