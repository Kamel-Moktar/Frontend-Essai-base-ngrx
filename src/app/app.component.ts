import {Component, OnInit} from '@angular/core';
import {ProductService} from "./services/ProductService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {LoginAction} from "./ngrx/products.actions";
import {map, Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Product} from "./models/poduct.model";
import {AuthenticateStatEnum, ProductsStat} from "./ngrx/products.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Gestion des produit ';
  readonly  AuthenticationEnum=AuthenticateStatEnum


  userFormGroup :FormGroup=this.fb.group(
    {
      userName : ['',Validators.required],
      password : ['',Validators.required]
    }
  )


  actualStat$? : Observable<ProductsStat>;

  constructor(private productService : ProductService,
              private fb  : FormBuilder,private router : Router,
              private store :Store<any>
  ) {

    this.actualStat$=this.store.pipe(
      map( stat=>{ //this.authenticated=stat.catalogueStat;

        console.log(" authentication Stat :"+stat.catalogueStat.authenticateStat);
        return stat.catalogueStat
      }
    )
    )
  }


  OnLogin(user : any) {
   this.store.dispatch(new LoginAction(user));
  }
}
