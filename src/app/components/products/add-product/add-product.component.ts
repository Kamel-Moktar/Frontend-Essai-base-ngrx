import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductValidators} from "../../../models/product.validators";
import {Store} from "@ngrx/store";
import {Product} from "../../../models/poduct.model";
import {AddProductAction, GetAllProductAction, SwitchPageAction} from "../../../ngrx/products.actions";
import {Router} from "@angular/router";
import {map} from "rxjs";
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {environment} from "../../../../environments/environment";



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFormGroup:FormGroup;
  currentPage : number=1;
  nbrProducts : number=0;

  firstUseName:boolean=true;


  constructor(private fb: FormBuilder,private store : Store<any>,private router: Router) {
    this.productFormGroup = this.fb.group({
      name: ["", ProductValidators.NAME_VALIDATOR],
      price: [0, ProductValidators.PRICE_VALIDATOR],
      quantity: [0, ProductValidators.QUANTITY_VALIDATOR],
      selected: [true, ProductValidators.SELECTED_VALIDATOR],
      available: [true, ProductValidators.AVAILABLE_VALIDATOR]
    })
  }

  ngOnInit(): void {

    this.productFormGroup = this.fb.group({
      name: ["", ProductValidators.NAME_VALIDATOR],
      price: [0, ProductValidators.PRICE_VALIDATOR],
      quantity: [0, ProductValidators.QUANTITY_VALIDATOR],
      selected: [true, ProductValidators.SELECTED_VALIDATOR],
      available: [true, ProductValidators.AVAILABLE_VALIDATOR]
    })

    this.store.pipe(
      map(currentStat=>currentStat.catalogueStat)
    ).subscribe(value =>{
      this.currentPage=value.currentPage;
      this.nbrProducts=value.products.length+1;
      }
    )
    let rowsPerPage=environment.rowsPerPage;
    let nbrPage;
    if (Math.floor(this.nbrProducts/rowsPerPage)==(this.nbrProducts/rowsPerPage)) nbrPage=this.nbrProducts/rowsPerPage;
    else nbrPage=Math.floor(this.nbrProducts/rowsPerPage)+1;


    console.log(" nbr page= "+this.nbrProducts+"/"+rowsPerPage+" = "+nbrPage);

    this.store.dispatch(new SwitchPageAction({currentPage:nbrPage}))

  }

  onAddProduct(product : Product) {
    this.store.dispatch(new AddProductAction({product:product,currentPage:this.currentPage}));


    this.router.navigateByUrl("/products");
  }


  OnNameFocusOut() {
    this.firstUseName=false;
  }
}
