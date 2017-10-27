import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollClassModule } from './../../modules/ScrollClass/scroll-class.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivFieldComponent } from './ScrollDemo/div-field.component';
import { WindowComponent } from './ScrollDemo/window.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    DivFieldComponent
  ],
  imports: [
    BrowserModule,
    ScrollClassModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
