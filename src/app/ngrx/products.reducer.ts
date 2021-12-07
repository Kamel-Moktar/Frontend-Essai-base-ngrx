import {Product} from "../models/poduct.model";
import {ProductAction, ProductActionType} from "./products.actions";
import {Action, State} from "@ngrx/store";
import {environment} from "../../environments/environment";


export enum  ProductDataStatEnum {
  LOADING="Loading",
  LOADED="LOADED",
  ERROR="Error",
  INITIAL="Initail"
}

export enum AuthenticateStatEnum{
  UNSIGNED,
  SIGNING_ERROR,
  SIGNED
 }

export interface ProductsStat{
  products : Product[];
  errorMessage : String;
  dataStat : ProductDataStatEnum
  currentPage : number;
  authenticateStat : AuthenticateStatEnum;

}




const  initialStat : ProductsStat=
  {
  products : [] ,  errorMessage : "", dataStat:ProductDataStatEnum.INITIAL,currentPage:1,
    authenticateStat:(localStorage.getItem(environment.tokenName)!=null)? AuthenticateStatEnum.SIGNED : AuthenticateStatEnum.UNSIGNED
  }

export function productReducer(stat=initialStat,action : Action) : ProductsStat {
  switch (action.type) {

    /*
    Managing GET_ALL_Products
    */

    case ProductActionType.GET_ALL_PRODUCT :
      return {...stat, dataStat:ProductDataStatEnum.LOADING};
    case ProductActionType.GET_ALL_PRODUCT_SUCCESS :
      return {...stat, dataStat:ProductDataStatEnum.LOADED,products:(<ProductAction>action).payload};
    case ProductActionType.GET_ALL_PRODUCT_ERROR:
      return {...stat, dataStat:ProductDataStatEnum.ERROR,errorMessage:(<ProductAction>action).payload};

    /*
    Managing GET_Selected_Products
    */

    case ProductActionType.GET_SELECTED_PRODUCT :
      return {...stat, dataStat:ProductDataStatEnum.LOADING};
    case ProductActionType.GET_SELECTED_PRODUCT_SUCCESS :
      return {...stat, dataStat:ProductDataStatEnum.LOADED,products:(<ProductAction>action).payload};
    case ProductActionType.GET_SELECTED_PRODUCT_ERROR:
      return {...stat, dataStat:ProductDataStatEnum.ERROR,errorMessage:(<ProductAction>action).payload};

     /*
     Managing GET_SEARCH_PRODUCT
      */

    case ProductActionType.GET_SEARCH_PRODUCT :
      return {...stat,dataStat: ProductDataStatEnum.LOADING}
    case ProductActionType.GET_SEARCH_PRODUCT_SUCCESS :
      return {...stat,dataStat: ProductDataStatEnum.LOADED,products:(<ProductAction>action).payload}
    case ProductActionType.GET_SEARCH_PRODUCT_ERROR:
      return {...stat, dataStat:ProductDataStatEnum.ERROR,errorMessage:(<ProductAction>action).payload}

    /*
    Managing Select/Unselect product
    */

    case ProductActionType.SELECT_PRODUCT :
      return {...stat,dataStat: ProductDataStatEnum.LOADING}
    case ProductActionType.SELECT_PRODUCT_SUCCESS :{
      let product:Product=(<ProductAction>action).payload.product;
      let currentPage=(<ProductAction>action).payload.currentPage;
      let listProduct=[...stat.products];

      listProduct=listProduct.map((p)=>p.id==product.id? product:p);


      return {...stat,dataStat: ProductDataStatEnum.LOADED,products :listProduct , currentPage:currentPage}
    }
    case ProductActionType.SELECT_PRODUCT_ERROR:
      return {...stat, dataStat:ProductDataStatEnum.ERROR,errorMessage:(<ProductAction>action).payload}


    /*
    Managing delete product
     */

    case ProductActionType.DELETE_PRODUCT :
      return {...stat,dataStat: ProductDataStatEnum.LOADING}
    case ProductActionType.DELETE_PRODUCT_SUCCESS :{
      let p1:Product=(<ProductAction>action).payload.product;
      let currentPage=(<ProductAction>action).payload.currentPage;
      let j:number =stat.products.indexOf(p1);
      let list : Product[]=[...stat.products];
      list.splice(j,1);
      return {...stat,dataStat: ProductDataStatEnum.LOADED,products:list,currentPage:currentPage}
    }
    case ProductActionType.DELETE_PRODUCT_ERROR:
      return {...stat, dataStat:ProductDataStatEnum.ERROR,errorMessage:(<ProductAction>action).payload}

    /*
    Managing add a new product Select/Unselect product
     */

    case ProductActionType.ADD_PRODUCT :
      return {...stat,dataStat: ProductDataStatEnum.LOADING}
     case ProductActionType.ADD_PRODUCT_SUCCESS : {

      let p:Product=(<ProductAction>action).payload.product;
      let currentPage=(<ProductAction>action).payload.currentPage;
      let newList =[...stat.products];
      newList.push(p);

      return {...stat,dataStat: ProductDataStatEnum.LOADED,products:newList,currentPage:currentPage}
     }
    case ProductActionType.ADD_PRODUCT_ERROR:
      return {...stat, dataStat:ProductDataStatEnum.ERROR,errorMessage:(<ProductAction>action).payload}

    /*
        Managing updating a product Select/Unselect product
         */

    case ProductActionType.UPDATE_PRODUCT :
      return {...stat,dataStat: ProductDataStatEnum.LOADING}
    case ProductActionType.UPDATE_PRODUCT_SUCCESS : {

      let product1:Product=(<ProductAction>action).payload.product;
      let currentPage=(<ProductAction>action).payload.currentPage;
      let newList=[...stat.products];
      newList=newList.map((p)=>p.id==product1.id? product1:p);
      return {...stat,dataStat: ProductDataStatEnum.LOADED,products:newList,currentPage:currentPage}
    }
    case ProductActionType.UPDATE_PRODUCT_ERROR:
      return {...stat, dataStat:ProductDataStatEnum.ERROR,errorMessage:(<ProductAction>action).payload}

    /*
        Managing  switching Page
         */

    case ProductActionType.SWITCH_PAGE :
      return {...stat,dataStat: ProductDataStatEnum.LOADING}
    case ProductActionType.SWITCH_PAGE_SUCCESS : {
      let currentPage=(<ProductAction>action).payload.currentPage;
      return {...stat,dataStat: ProductDataStatEnum.LOADED,currentPage:currentPage}
    }
    case ProductActionType.SWITCH_PAGE_ERROR:
      return {...stat, dataStat:ProductDataStatEnum.ERROR,errorMessage:(<ProductAction>action).payload}


         /*
         Managing  login
         */

    case ProductActionType.LOGIN :
      return {...stat,dataStat: ProductDataStatEnum.LOADING}
    case ProductActionType.LOGIN_SUCCESS : {

      return {...stat,dataStat: ProductDataStatEnum.LOADED,authenticateStat:AuthenticateStatEnum.SIGNED}
    }
    case ProductActionType.LOGIN_ERROR:
      return {...stat, dataStat:ProductDataStatEnum.ERROR,errorMessage:(<ProductAction>action).payload,authenticateStat:AuthenticateStatEnum.SIGNING_ERROR}

    /*
       Managing  logout
        */

    case ProductActionType.LOGOUT :
      return {...stat,dataStat: ProductDataStatEnum.LOADING}
    case ProductActionType.LOGOUT_SUCCESS : {
      return {...stat,dataStat: ProductDataStatEnum.LOADED,authenticateStat:AuthenticateStatEnum.UNSIGNED}
    }
    case ProductActionType.LOGOUT_ERROR:
      return {...stat, dataStat:ProductDataStatEnum.ERROR,errorMessage:(<ProductAction>action).payload}

    /*
    A defaut
     */
    default : return {...stat};

  }



}
