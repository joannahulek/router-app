import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data: any[]=[
    {id: 0, name: "Arabica", price: 100},
    {id: 1, name: "Robusta", price: 80},
    {id: 2, name: "Blend", price: 90}
  ]

  constructor() { }

  getAllProducts(){
    return of(this.data)
  }
}
