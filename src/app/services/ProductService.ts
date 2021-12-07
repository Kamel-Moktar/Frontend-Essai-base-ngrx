import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {map, observable, Observable} from "rxjs";
import {Product} from "../models/poduct.model";
import {environment} from "../../environments/environment";

@Injectable({providedIn:"root"})

export class ProductService{



  constructor(private http1:HttpClient) {
  }

  login(user : any){

    let host =environment.backendHost;
    let tableName=environment.productTableName;

    this.http1.post(host+"/login" ,{"userName":user.userName,"password":user.password},{observe:"response"}).subscribe(
        response=> {
          let jwt=response.headers.get("Authorization");
          this.saveToken(jwt);
          });
  }

  getAllProduct():Observable<Product[]>{


  let host =environment.backendHost;
    let tableName=environment.productTableName;
    this.loadToken();

  return this.http1.get<Product[]>(host+"/"+tableName, {
    headers:new HttpHeaders ({ "Authorization" : ""+this.loadToken() }),observe:"body"


  });
  }

  getSelectedProduct() {
    let host =environment.backendHost;
    let tableName=environment.productTableName;
    return this.http1.get<Product[]>(host+"/"+tableName+"?selected=true");
  }
  searchByName(n : any) {
    let host =environment.backendHost;
    console.log(n);
    let tableName=environment.productTableName;
    return this.http1.get<Product[]>(host+"/"+tableName+"?name_like="+n);
  }

  selectProduct(product : Product) {
    let host =environment.backendHost;
    let tableName=environment.productTableName;
    return this.http1.put<Product>(host+"/"+tableName+"/"+product.id,product);
  }

  deleteProduct(product : Product) {
    let host =environment.backendHost;
    let tableName=environment.productTableName;
    return this.http1.delete<void>(host+"/"+tableName+"/"+product.id);
  }
  addProduct(product : Product){
    let host =environment.backendHost;
    let tableName=environment.productTableName;
    return this.http1.post<Product>(host+"/"+tableName,product);
  }

  updateProduct(product : Product){
    let host =environment.backendHost;
    let tableName=environment.productTableName;
    return this.http1.put<Product>(host+"/"+tableName+"/"+product.id,product);
  }
  saveToken(jwt :any ){
      let tokenName=environment.tokenName;
      localStorage.setItem(tokenName,jwt);
  }

  loadToken(): string {
      let tokenName=environment.tokenName;
      return <string>localStorage.getItem(tokenName);

  }

  clearToken() {
      let tokenName=environment.tokenName;
      localStorage.removeItem(tokenName);
    }
}
