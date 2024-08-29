import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductslistComponent} from "./products/productslist/productslist.component";

const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductslistComponent},
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
