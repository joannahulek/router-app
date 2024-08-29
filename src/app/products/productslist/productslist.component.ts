import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.less'
})
export class ProductslistComponent implements OnInit{
  products: any[] = []

  constructor(private store: ProductsService) {
  }
  ngOnInit(): void {
    this.store.getAllProducts().subscribe(products => {
      this.products = products
    })
  }

}
