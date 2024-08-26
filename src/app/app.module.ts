import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing/app-routing.module";
import {AppComponent} from "./app.component";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class AppModule { }
