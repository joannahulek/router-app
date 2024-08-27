import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
