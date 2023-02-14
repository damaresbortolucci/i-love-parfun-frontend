import { Component, Input } from '@angular/core';
import Product from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input()
  product!: Product;

  constructor(
    private cartService: CartService,
  ){}

  addItem(product: Product):void{
    if(product.quantity == product.stock)
        product.quantity = product.stock;
    else
      product.quantity++;

    this.cartService.addProductCart(product)
  }

  removeItem(product: Product):void{
    if(product.quantity==1)
      product.quantity = 1;
    else
      product.quantity--;

    this.cartService.addProductCart(product)
  }


  deleteProduct = (product: Product) => {
    this.cartService.deleteProductCart(product)
  }

}
