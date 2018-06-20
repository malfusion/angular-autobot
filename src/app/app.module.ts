import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularAutobotModule} from 'angular-autobot';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularAutobotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
