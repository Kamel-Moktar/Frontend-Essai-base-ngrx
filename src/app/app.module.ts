import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { ProductNavbarComponent } from './components/products/product-navbar/product-navbar.component';
import { ProductItemComponent } from './components/products/products-list/product-item/product-item.component';
import {productReducer} from "./ngrx/products.reducer";
import {ProductEffects} from "./ngrx/product.effects";
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';

import {NgxPaginationModule} from "ngx-pagination";
import { LoginComponent } from './security/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductNavbarComponent,
    ProductItemComponent,
    ProductsListComponent,
    EditProductComponent,
    AddProductComponent,
    LoginComponent,
    NavBarComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forRoot({catalogueStat: productReducer}),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
