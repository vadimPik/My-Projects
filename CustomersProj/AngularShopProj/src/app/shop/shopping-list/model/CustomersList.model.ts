
export class CustomerListState {
  Customers: Array<Customer>;
  TotalCustomersCount: number;
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

export class CustomerDeleteRequest {
  IndexToDelete: number;
  CustomerID: string;

  constructor(IndexToDelete: number, CustomerID: string) {
    this.IndexToDelete = IndexToDelete;
    this.CustomerID = CustomerID;
  }
}