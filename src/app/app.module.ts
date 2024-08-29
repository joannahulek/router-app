import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ProductsModule} from "./products/products.module";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ProductsModule
  ]
})
export class AppModule { }
