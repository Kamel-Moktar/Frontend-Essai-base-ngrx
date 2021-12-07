import {Validators} from "@angular/forms";
import {Product} from "./poduct.model";

export abstract class  ProductValidators {
  public static NAME_VALIDATOR=[Validators.required];
  public static PRICE_VALIDATOR=[Validators.required,Validators.max(10000),Validators.min(0)];
  public static QUANTITY_VALIDATOR=[Validators.required,Validators.max(10000),Validators.min(0)];
  public static SELECTED_VALIDATOR=[Validators.required];
  public static AVAILABLE_VALIDATOR=[Validators.required];
}





