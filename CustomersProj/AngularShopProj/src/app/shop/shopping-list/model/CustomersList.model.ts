//import { Product } from '../../product-list/model/customers.model';

// export class ShoppingListState {
//   products: Array<Product>;
//   totalprice: number;
//   numberOfProducts: number;
//   ShoppingListID: number;
//   Status: number;
//   ErrorMessage: string;
  
//  // constructor(public date: string, public amount: number) {}
// }


// export class ShoppingListRequest {
//   ShoppingListID: number;
//   UserID: string;
//   ItemID: number;
//   Quantity: number;
//   productPrice: number;
//   Status: number;
// }

export class CustomerListState {
  Customers: Array<Customer>;
  TotalCustomers: number;
  ErrorMessage: string;
}

export class Customer {
  CustomerID: string;
  CustomerName: string;
  CustomerEmail: string;
  CustomerAdress: string;

  constructor(CustomerID: string, CustomerName: string, CustomerEmail: string, CustomerAdress: string) {
    this.CustomerID = CustomerID;
    this.CustomerName = CustomerName;
    this.CustomerEmail = CustomerEmail;
    this.CustomerAdress = CustomerAdress;
  }
}

// export class CustomerAddRequest {
//   CustomerName: string;
//   CustomerEmail: string;
//   CustomerAddress: string;
// }

export class CustomerDeleteRequest {
  IndexToDelete: number;
  CustomerID: string;

  constructor(IndexToDelete: number, CustomerID: string) {
    this.IndexToDelete = IndexToDelete;
    this.CustomerID = CustomerID;
  }
}

// export class ShoppingListProduct {
//   ProductName: string;
//   ProductPrice: number;
//   ProductPicturePath: string;
//   ItemID: number;
//   Quantity: number;
//   ShoppingListID: number
// }

// export class ShoppingListDeleteRequest {
//   UserID: string;
//   ShoppingListID: number;
//   ItemID: number;
//   //Quantity to delete
//   Quantity: number;
//   IndexToDelete: number;
// }


// export class ShoppingListUpdateQuantityRequest {
//   ShoppingListID: number;
//   ItemID: number;
//   Quantity: number;
//   IndexToUpdate: number;
//   UpdatedTotalPrice: number;
//   UpdatedNumberOfProducts: number;
//   UpdatedProducts: Product[]
// }


// export class Status {
//   0 = 'InProgress';
//   1 = 'Finished'
// }