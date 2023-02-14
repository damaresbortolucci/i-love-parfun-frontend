import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import Product from 'src/app/models/Product';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  hasError: boolean = false;
  user?: any;

  @Input() product!: Product;
  @ViewChild('inputQuantity') inputQuantity!: ElementRef; 

 
  constructor(   
    private authService: AuthService,
    private cartService: CartService
  ) {}


  // refatorar com output para passar as resp do negocio para o pai 
  addToCart=(product: Product) => {
    this.cartService.addProductCart(product);
  }

  addItem = (product: Product):void => {
    if(product.quantity == product.stock)
        product.quantity = product.stock;
    else
      product.quantity = ++this.inputQuantity.nativeElement.value;
  }

  removeItem = (product: Product):void => {
    if(product.quantity==1)
      product.quantity = 1;
    else
      product.quantity = --this.inputQuantity.nativeElement.value;
  }
  
  accessRole= ():boolean => {
    this.user = this.authService.getUser();
    return this.user?.role == 'cliente' || this.user?.role == null;
  }
}