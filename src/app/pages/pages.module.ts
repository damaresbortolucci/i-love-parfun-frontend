import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { UsersComponent } from './users/users.component';
import { ComponentsModule } from '../components/components.module';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { SumaryDetailsComponent } from './cart/sumary-details/sumary-details.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { BannerAdvantagesComponent } from './home/banner-advantages/banner-advantages.component';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { ProductsListComponent } from './products/products-list/products-list.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    ProductsComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    PageNotFoundComponent,
    CartItemComponent,
    SumaryDetailsComponent,
    UsersListComponent,
    HomeComponent,
    CarouselComponent,
    BannerAdvantagesComponent,
    ProductCardComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    ComponentsModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgbTypeaheadModule,
    AppRoutingModule,
  ],
  exports: []
})
export class PagesModule {}
