import { Product } from '../../product-list/model/products.model';

export class ShoppingListState {
  products: Array<Product>;
  totalprice: number;
  numberOfProducts: number;
  ShoppingListID: number;
  Status: number;
  ErrorMessage: string;
  
 // constructor(public date: string, public amount: number) {}
}


export class ShoppingListRequest {
  ShoppingListID: number;
  UserID: string;
  ItemID: number;
  Quantity: number;
  productPrice: number;
  Status: number;
}

export class ShoppingListProduct {
  ProductName: string;
  ProductPrice: number;
  ProductPicturePath: string;
  ItemID: number;
  Quantity: number;
  ShoppingListID: number
}

export class ShoppingListDeleteRequest {
  UserID: string;
  ShoppingListID: number;
  ItemID: number;
  //Quantity to delete
  Quantity: number;
  IndexToDelete: number;
}


export class ShoppingListUpdateQuantityRequest {
  ShoppingListID: number;
  ItemID: number;
  Quantity: number;
  IndexToUpdate: number;
  UpdatedTotalPrice: number;
  UpdatedNumberOfProducts: number;
  UpdatedProducts: Product[]
}


// export class Status {
//   0 = 'InProgress';
//   1 = 'Finished'
// }