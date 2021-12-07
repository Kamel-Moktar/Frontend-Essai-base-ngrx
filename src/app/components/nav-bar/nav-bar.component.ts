import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/ProductService";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {LogoutAction} from "../../ngrx/products.actions";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private productservice : ProductService,private router : Router,private store:Store) { }

  ngOnInit(): void {
  }

  OnLogout() {
   this.store.dispatch(new LogoutAction({}));
  }
}
