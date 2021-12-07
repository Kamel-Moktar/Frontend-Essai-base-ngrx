import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../../models/poduct.model";
import {Store} from "@ngrx/store";
import {DeleteProductAction, SelectProductAction, UpdateProductAction} from "../../../../ngrx/products.actions";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product : Product|null=null;
  //select1 : String="Select";
  @Input()
  index: number=0;
  @Input()
  currentPage: number=1;

  constructor(private store : Store<any>,private router:Router) { }

  ngOnInit(): void {

  }

  OnSelectProduct(product : Product) {

   this.store.dispatch(new SelectProductAction({product:{...product,selected:!product.selected},currentPage:this.currentPage}));
  }

  OnUpdateProduct(product : Product) {
    this.router.navigateByUrl("EditProduct/"+product.id );
  }

  OnDeleteProduct(product : Product) {
    let v=confirm("voullez vous vraiment supprimer ce produit");
    if(v==true)
    this.store.dispatch(new DeleteProductAction({product:product,currentPage:this.currentPage}));

  }
}
