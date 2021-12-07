import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {GetAllProductAction, GetSearchProductAction, GetSelectedProductAction} from "../../../ngrx/products.actions";
import {Router, RouterLink} from "@angular/router";
import {ProductService} from "../../../services/ProductService";

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.css']
})
export class ProductNavbarComponent implements OnInit {

  login :any;

  constructor(private store : Store<any>,private router: Router,public productService : ProductService) { }

  ngOnInit(): void {

  }

  getAllProduct() {


    this.store.dispatch(new GetAllProductAction({}));
  }

  getSelectedProduct() {
    this.store.dispatch(new GetSelectedProductAction({}));
  }

  searchByName(value :String) {
    this.store.dispatch(new GetSearchProductAction(value));
  }

  getAddProduct() {
    this.router.navigateByUrl("/newProduct");
  }
}
