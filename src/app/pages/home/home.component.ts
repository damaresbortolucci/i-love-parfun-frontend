import { Component } from '@angular/core';

import Product from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Product[] = [];
  hasError: boolean = false;

  constructor(   
    private productService: ProductService, 
  ) {}


  ngOnInit(): void {
    this.productService.listaProdutos().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => {
        this.hasError = true;
      },
    });
  }
}