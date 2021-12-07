import { Injectable} from "@angular/core";
import {ProductService} from "../services/ProductService";
import {Action} from "@ngrx/store";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  AddProductActionError, AddProductActionSuccess, DeleteProductActionError,
  DeleteProductActionSuccess,


  GetAllProductActionError,
  GetAllProductActionSuccess,
  GetSearchProductActionError,
  GetSearchProductActionSuccess,
  GetSelectedProductActionError,
  GetSelectedProductActionSuccess, LoginActionError, LoginActionSuccess, LogoutActionError, LogoutActionSuccess,
  ProductAction,
  ProductActionType,
  SelectProductAction,
  SelectProductActionError,
  SelectProductActionSuccess, SwitchPageActionError, SwitchPageActionSuccess, UpdateProductActionError,
  UpdateProductActionSuccess
} from "./products.actions";
import {Refresh} from "@ngrx/store-devtools/src/actions";
import {environment} from "../../environments/environment";


@Injectable()
export class ProductEffects{

  constructor(private productService : ProductService,private effectAction :Actions) {

  }


    /*
    Create Effect for GET_ALL_PRODUCT Action
     */
  getAllProductEffect : Observable<Action> = createEffect(

    ()=> this.effectAction.pipe(
      ofType(ProductActionType.GET_ALL_PRODUCT),
      mergeMap((action)=>{
         return this.productService.getAllProduct().pipe(
           map((products)=>{
             return new GetAllProductActionSuccess(products);
           }) ,
           catchError((err)=>of(new GetAllProductActionError(err.message)))
         )

        }

      )

    )


  );

    /*
    Create Effect for GET_SELECTED_PRODUCT Action
     */

  getSelectedProductEffect : Observable<Action> = createEffect(

    ()=> this.effectAction.pipe(
      ofType(ProductActionType.GET_SELECTED_PRODUCT),
      mergeMap((action)=>{
          return this.productService.getSelectedProduct().pipe(
            map((products)=>{
              return new GetSelectedProductActionSuccess(products);
            }) ,
            catchError((err)=>of(new GetSelectedProductActionError(err.message)))
          )

        }

      )

    )


  );
  /*
    Creat Effect for GET_SEARCH_PRODUCT
     */

  getSearchProductEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.GET_SEARCH_PRODUCT),
      mergeMap((action)=>{
        console.log((<ProductAction>action).payload)
        return this.productService.searchByName((<ProductAction>action).payload).pipe(
          map((products)=> {return new GetSearchProductActionSuccess(products);}),
          catchError((err)=>of(new GetSearchProductActionError(err.message )))
        )
      })

    ));
  /*
  Creat Effect for SELECT_PRODUCT
   */

  SelectProductEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.SELECT_PRODUCT),
      mergeMap((action)=>{
        return this.productService.selectProduct((<ProductAction>action).payload.product).pipe(
          map((product)=> {
            let currentPage=(<ProductAction>action).payload.currentPage;


            return new SelectProductActionSuccess({product:product,currentPage:currentPage})

          }),
          catchError((err)=>of(new SelectProductActionError(err.message )))
        )
      })

  ));

  /*
    Creat Effect for DELETE_PRODUCT
     */

  deleteProductEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.DELETE_PRODUCT),
      mergeMap((action)=>{
        return this.productService.deleteProduct((<ProductAction>action).payload.product).pipe(
          map(()=> {
            let currentPage=(<ProductAction>action).payload.currentPage;
            let  product=(<ProductAction>action).payload.product;
            return new DeleteProductActionSuccess({product:product,currentPage:currentPage});

          }),
          catchError((err)=>of(new DeleteProductActionError(err.message )))
        )
      })

    ));

  /*
    Creat Effect for ADD_PRODUCT
     */

  addProductEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.ADD_PRODUCT),
      mergeMap((action)=>{
        return this.productService.addProduct((<ProductAction>action).payload.product).pipe(
          map((product)=> {
            let currentPage=(<ProductAction>action).payload.currentPage;
            return new AddProductActionSuccess({product:product,currentPage:currentPage});

          }),
          catchError((err)=>of(new AddProductActionError(err.message )))
        )
      })

    ));
  /*
      Creat Effect for UPDATE_PRODUCT
       */

  updateProductEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.UPDATE_PRODUCT),
      mergeMap((action)=>{
        return this.productService.updateProduct((<ProductAction>action).payload.product).pipe(
          map((product)=> {
            let currentPage=(<ProductAction>action).payload.currentPage;

            return new UpdateProductActionSuccess({product:product,currentPage:currentPage});

          }),
          catchError((err)=>of(new UpdateProductActionError(err.message )))
        )
      })

    ));

  /*
  Managing switch products  page
   */
  switchPageEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.SWITCH_PAGE),
          map((action)=> {
            let currentPage=(<ProductAction>action).payload.currentPage;

            return new SwitchPageActionSuccess({currentPage:currentPage});

          }),
          catchError((err)=>of(new SwitchPageActionError(err.message )))
        )
      );

  /*
  Managing Login App
   */

  loginEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.LOGIN),
      map((action)=> {
            this.productService.login((<ProductAction>action).payload);
           if (localStorage.getItem(environment.tokenName)!=null)
            return new LoginActionSuccess({})
            else return new LoginActionError("-Nom D'utilisateur ou mots de pass Incorrect");
       }),
      catchError((err)=> of( new LoginActionError(err.message)))
      )
    );



  /*
    Managing Logout App
     */

  logoutEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.LOGOUT),
      map(action=> {
        this.productService.clearToken();
        return new LogoutActionSuccess({});
      }),
      catchError(err => of(new LogoutActionError(err.message)))
    )
  )


}
