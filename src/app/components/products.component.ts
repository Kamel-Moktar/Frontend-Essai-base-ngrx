import { Component, OnInit } from '@angular/core';

import {map, Observable} from "rxjs";

import {Store} from "@ngrx/store";
import {ProductsStat} from "../ngrx/products.reducer";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   product$ : Observable<ProductsStat>|null=null;

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
     this.product$ =this.store.pipe(
    map((stat)=>stat.catalogueStat)
  )
  }


}
