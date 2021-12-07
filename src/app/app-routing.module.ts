import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products.component";
import {AddProductComponent} from "./components/products/add-product/add-product.component";
import {EditProductComponent} from "./components/products/edit-product/edit-product.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";


const routes: Routes = [
  {path: "products", component : ProductsComponent     },
  {path: "newProduct", component :AddProductComponent  },
  {path: "EditProduct/:id", component :EditProductComponent},
  {path: "navBar", component :NavBarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
