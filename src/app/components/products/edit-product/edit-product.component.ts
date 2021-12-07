import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductValidators} from "../../../models/product.validators";
import {Product} from "../../../models/poduct.model";
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import { UpdateProductAction} from "../../../ngrx/products.actions";
import {ProductsStat} from "../../../ngrx/products.reducer";


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productFormGroup: FormGroup=this.fb.group(
    {
      id:[0,Validators.required],
      name:["",ProductValidators.NAME_VALIDATOR],
      price:["",ProductValidators.PRICE_VALIDATOR],
      quantity:["",ProductValidators.QUANTITY_VALIDATOR],
      selected:["",ProductValidators.SELECTED_VALIDATOR],
      available:["",ProductValidators.AVAILABLE_VALIDATOR]
    }
  );


  currentPage : number=1;
  products? : Product[];
  forUpdatingProduct? : Product;
  forUpdatingPramID :string | null=" ";
  Productstat$?: Observable<ProductsStat>
  constructor(private fb : FormBuilder,private store : Store<any>,
              private activateRoute: ActivatedRoute,private router: Router) {


  }

  ngOnInit(): void {
    this.forUpdatingPramID=this.activateRoute.snapshot.paramMap.get('id');
    this.Productstat$=this.store.pipe(
      map(stat=>stat.catalogueStat));
      this.Productstat$.subscribe(
        value => {this.products=value.products;
         this.currentPage=value.currentPage;}
      );
    this.products?.forEach(p=>{
                          if( p.id==(<number><unknown>this.forUpdatingPramID))
                          {this.forUpdatingProduct=p ;return;}
    });

    this.productFormGroup=this.fb.group(
      {
        id:[this.forUpdatingProduct?.id,Validators.required],
        name:[this.forUpdatingProduct?.name,ProductValidators.NAME_VALIDATOR],
        price:[this.forUpdatingProduct?.price,ProductValidators.PRICE_VALIDATOR],
        quantity:[this.forUpdatingProduct?.quantity,ProductValidators.QUANTITY_VALIDATOR],
        selected:[this.forUpdatingProduct?.selected,ProductValidators.SELECTED_VALIDATOR],
        available:[this.forUpdatingProduct?.available,ProductValidators.AVAILABLE_VALIDATOR]
      }
    );



    }


  onEditProduct(value: Product) {

    this.store.dispatch(new UpdateProductAction({product:value,currentPage:this.currentPage}));

    this.router.navigateByUrl("/products");
  }



}
