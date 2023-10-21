import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularReactModule } from '@bubblydoo/angular-react';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularReactModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
