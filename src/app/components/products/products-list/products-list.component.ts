import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import { Store} from "@ngrx/store";
import {ProductDataStatEnum, ProductsStat} from "../../../ngrx/products.reducer";
import {SwitchPageAction} from "../../../ngrx/products.actions";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
products$ : Observable<ProductsStat>|null= null;
  products1$ : Observable<ProductsStat>|null= null;
DataStateType=ProductDataStatEnum;
currentPage :number=1;
maxSize: number=6;
rowsPerPAge: number=8;

constructor(private store :Store<any>) { }

  ngOnInit(): void {
  this.products$=this.store.pipe(
    map((stat)=>
       stat.catalogueStat
    )
  )
    this.products$?.subscribe(stat=> {this.currentPage=stat.currentPage;

      console.log(stat.products)
    }
    )
    this.rowsPerPAge=environment.rowsPerPage;

  }

  pageChanged($event: number) {
    this.store.dispatch(new SwitchPageAction({currentPage:$event}))
    this.currentPage=$event;
  }
}
