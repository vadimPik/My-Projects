
export class ProductListState {
  products: Array<Product>;
  ErrorMessage: string;
}

export class Product {
  ProductName: string;
  ProductPrice: number;
  ProductPicturePath: string;
  ItemID: number;
  Quantity: number;
}

