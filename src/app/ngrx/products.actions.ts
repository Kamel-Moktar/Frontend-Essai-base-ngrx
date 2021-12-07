import {Actions} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Product} from "../models/poduct.model";

export enum ProductActionType {
  /*
  do no thing
   */
  DO_NOTHING="Do nothing",
  /*
  Get all products Actions
   */
  GET_ALL_PRODUCT = "[Product] get all Product",
  GET_ALL_PRODUCT_SUCCESS = "[Product] get all product success",
  GET_ALL_PRODUCT_ERROR = "[Product] get all product error ",

  /*
  Get Selected  products Actions
  */

  GET_SELECTED_PRODUCT = "[Product] get selected Product",
  GET_SELECTED_PRODUCT_SUCCESS = "[Product] get selected product success",
  GET_SELECTED_PRODUCT_ERROR = "[Product] get  selected product error ",

   /*
  Get search   products Actions
   */

  GET_SEARCH_PRODUCT = "[Product] get search Product",
  GET_SEARCH_PRODUCT_SUCCESS = "[Product] get search product success",
  GET_SEARCH_PRODUCT_ERROR = "[Product] get search product error ",

  /*
  Select    products Actions
  */

  SELECT_PRODUCT = "[Product] select Product",
  SELECT_PRODUCT_SUCCESS = "[Product] select product success",
  SELECT_PRODUCT_ERROR = "[Product] select product error ",

  /*
  delete     products Actions
  */

  DELETE_PRODUCT = "[Product] delete Product",
  DELETE_PRODUCT_SUCCESS = "[Product] delete product success",
  DELETE_PRODUCT_ERROR = "[Product] delete product error ",


  /*
  Update    products Actions
  */

  UPDATE_PRODUCT = "[Product] update Product",
  UPDATE_PRODUCT_SUCCESS = "[Product] update product success",
  UPDATE_PRODUCT_ERROR = "[Product] update product error ",

  /*
  Add    products Actions
  */

  ADD_PRODUCT = "[Product] Add Product",
  ADD_PRODUCT_SUCCESS = "[Product] add product success",
  ADD_PRODUCT_ERROR = "[Product] add product error ",

/*
  SWHITCH   products Actions
*/

  SWITCH_PAGE= "[Page] Add Product",
  SWITCH_PAGE_SUCCESS = "[Page] Add Product success",
  SWITCH_PAGE_ERROR = "[Page] Add Product error",

  /*
  Login   products Actions
*/

  LOGIN= "[Login] login",
  LOGIN_SUCCESS = "[Login] login success",
  LOGIN_ERROR = "[Login] login error",

  /*
  Logout   products Actions
 */


  LOGOUT= "[Logout] login",
  LOGOUT_SUCCESS = "[Logout] login success",
  LOGOUT_ERROR = "[Logout] login error",

}

export interface ProductPayLoad{
  products? : Product[];
  product? :Product;
  currentPage? : number;

}
export interface AppUser{
  userName : string;
  password : string;
}

/*
Swich page  type
*/


export class SwitchPageAction implements Action{
  type: ProductActionType=ProductActionType.SWITCH_PAGE;
  constructor(public payload:ProductPayLoad) {
  }
}

export class SwitchPageActionSuccess implements Action {
  type: ProductActionType = ProductActionType.SWITCH_PAGE_SUCCESS;
  constructor(public payload: ProductPayLoad) {
  }
}

export class SwitchPageActionError implements  Action {
  type: ProductActionType=ProductActionType.SWITCH_PAGE_ERROR;
  constructor(public payload:String) {
  }
}

/*
Login  type
*/


export class LoginAction implements Action{
  type: ProductActionType=ProductActionType.LOGIN;
  constructor(public payload : AppUser ) {
  }
}

export class LoginActionSuccess implements Action {
  type: ProductActionType = ProductActionType.LOGIN_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoginActionError implements  Action {
  type: ProductActionType=ProductActionType.LOGIN_ERROR;
  constructor(public payload:String) {
  }
}

/*
Logout   type
*/


export class LogoutAction implements Action{
  type: ProductActionType=ProductActionType.LOGOUT;
  constructor(public payload:any) {
  }
}

export class LogoutActionSuccess implements Action {
  type: ProductActionType = ProductActionType.LOGOUT_SUCCESS;
  constructor(public payload:any) {
  }
}

export class LogoutActionError implements  Action {
  type: ProductActionType=ProductActionType.LOGOUT_ERROR;
  constructor(public payload:String) {
  }
}

/*
get all product types
 */
export class GetAllProductAction implements Action{
  type: ProductActionType=ProductActionType.GET_ALL_PRODUCT;
  constructor(public payload:any) {
  }
}

export class GetAllProductActionSuccess implements Action {
  type: ProductActionType = ProductActionType.GET_ALL_PRODUCT_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class GetAllProductActionError implements  Action {
  type: ProductActionType=ProductActionType.GET_ALL_PRODUCT_ERROR;
  constructor(public payload:String) {
  }
}

/*
get Selected  product types
 */
export class GetSelectedProductAction implements Action{
  type: ProductActionType=ProductActionType.GET_SELECTED_PRODUCT;
  constructor(public payload:any) {
  }
}

export class GetSelectedProductActionSuccess implements Action {
  type: ProductActionType = ProductActionType.GET_SELECTED_PRODUCT_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class GetSelectedProductActionError implements  Action {
  type: ProductActionType=ProductActionType.GET_SELECTED_PRODUCT_ERROR;
  constructor(public payload:String) {
  }
}

/*
get search  product types
 */
export class GetSearchProductAction implements Action{
  type: ProductActionType=ProductActionType.GET_SEARCH_PRODUCT;
  constructor(public payload:String) {
  }
}

export class GetSearchProductActionSuccess implements Action {
  type: ProductActionType = ProductActionType.GET_SEARCH_PRODUCT_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class GetSearchProductActionError implements  Action {
  type: ProductActionType=ProductActionType.GET_SEARCH_PRODUCT_ERROR;
  constructor(public payload:String) {
  }
}


/*
Select  product types
 */
export class SelectProductAction implements Action{
  type: ProductActionType=ProductActionType.SELECT_PRODUCT;
  constructor(public payload : ProductPayLoad) {
  }
}

export class SelectProductActionSuccess implements Action {
  type: ProductActionType = ProductActionType.SELECT_PRODUCT_SUCCESS;
  constructor(public payload: ProductPayLoad){
  }
}

export class SelectProductActionError implements  Action {
  type: ProductActionType=ProductActionType.SELECT_PRODUCT_ERROR;
  constructor(public payload:String) {
  }
}

/*
Update  product types
 */
export class UpdateProductAction implements Action{
  type: ProductActionType=ProductActionType.UPDATE_PRODUCT;
  constructor(public payload:ProductPayLoad) {
  }
}

export class UpdateProductActionSuccess implements Action {
  type: ProductActionType = ProductActionType.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: ProductPayLoad) {
  }
}

export class UpdateProductActionError implements  Action {
  type: ProductActionType=ProductActionType.UPDATE_PRODUCT_ERROR;
  constructor(public payload:String) {
  }
}

/*
DELETE  product types
 */
export class DeleteProductAction implements Action{
  type: ProductActionType=ProductActionType.DELETE_PRODUCT;
  constructor(public payload:ProductPayLoad) {
  }
}

export class DeleteProductActionSuccess implements Action {
  type: ProductActionType = ProductActionType.DELETE_PRODUCT_SUCCESS;
  constructor(public payload: ProductPayLoad) {
  }
}

export class DeleteProductActionError implements  Action {
  type: ProductActionType=ProductActionType.DELETE_PRODUCT_ERROR;
  constructor(public payload:String) {
  }
}

 /*
 ADD  product types
 */

export class AddProductAction implements Action{
  type: ProductActionType=ProductActionType.ADD_PRODUCT;
  constructor(public payload:ProductPayLoad) {
  }
}

export class AddProductActionSuccess implements Action {
  type: ProductActionType = ProductActionType.ADD_PRODUCT_SUCCESS;
  constructor(public payload: ProductPayLoad) {
  }
}

export class AddProductActionError implements  Action {
  type: ProductActionType=ProductActionType.ADD_PRODUCT_ERROR;
  constructor(public payload:String) {
  }
}

export type ProductAction=
  GetAllProductAction | GetAllProductActionSuccess | GetAllProductActionError |
  GetSelectedProductAction | GetSelectedProductActionSuccess | GetSelectedProductActionError|
  GetSearchProductAction | GetSearchProductActionSuccess | GetSearchProductActionError|
  SelectProductAction | SelectProductActionSuccess | SelectProductActionError|
  UpdateProductAction | UpdateProductActionSuccess | UpdateProductActionError|
  DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError|
  AddProductAction | AddProductActionSuccess | AddProductActionError|
  SwitchPageAction|SwitchPageActionError|SwitchPageActionSuccess|
  LoginAction|LoginActionError|LoginActionSuccess|
  LogoutAction|LogoutActionError|LogoutActionSuccess

;
