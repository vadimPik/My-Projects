import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
//import { Customers } from '../product-list/model/customers.model';
import { Store } from '@ngrx/store';
import { AppRootState } from 'src/app/reducers';
import { takeUntil, map } from 'rxjs/operators';
import { numberOfCustomersSelector, customersListSelector } from './Store/customers-list.selector';
import * as ShoppingListActions from './Store/Customers-list.actions';
//import { ShoppingListState, ShoppingListDeleteRequest, ShoppingListUpdateQuantityRequest } from './model/CustomersList.model';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Actions } from '@ngrx/store-devtools/src/reducer';
import { ofType } from '@ngrx/effects';
import { LOGIN_SUCCESS, LoginSuccessAction } from 'src/app/login/store/login.actions';
import { UserDetails } from 'src/app/login/login.model';
import { CustomerListService } from './Services/customers-list.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
//import { ProductListService } from '../product-list/Services/product-list.service';
import { GetCustomersAction, ClearCustomersListAction, DeleteCustomerAction } from './Store/Customers-list.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationRequest } from './model/Pagination.model';
import { Customer, CustomerDeleteRequest } from './model/CustomersList.model';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CustomersListComponent implements OnInit, OnDestroy {
  

  ngUnsubscribe = new Subject<void>();

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  };

  config : any;
  collection :[];


  // isDisabled: boolean;
  public page: number = 1;
  public pageSize: number = 20;
  customers: Customer[];
 // totalPrice: number;
  numberOfCustomers: number;

  pageSizeSelection = [];
  selectedItems = [];
  pageSizeDropdownSettings = {};
 // shoppingListID: number;
 // UserID: string;
 // existProductTobuy: boolean = false;
 // public headers: Array<any> = ['ProductName', 'ProductPrice', 'ProductPicture', 'Quantity', ''];



//  pageSizeSelection = [
//   {label: '20'},
//   {label: '50'},
//   {label: '100'},
//   {label: 'All'}
//   ];

  constructor(private store: Store<AppRootState>, private customerListServer:CustomerListService,  private route: ActivatedRoute, private router: Router  ) {
    // this.config = {
    //   currentPage : 1,
    //   itemsPerPage : 20,
    //   totalItems : 0
    // }

    // route.queryParams.subscribe(
    //   params => this.config.currentPage = params['page'] ? params['page']: 1);
    
  }


  ngOnInit() {

    this.pageSizeSelection = [
      {"id":1,"itemName":"20"},
      {"id":2,"itemName":"50"},
      {"id":3,"itemName":"100"},
      {"id":4,"itemName":"All"},
    ];

    this.selectedItems = [
      {"id":1,"itemName":"20"},
    ];

    this.pageSizeDropdownSettings = { 
      singleSelection: true, 
      text:"Select Item",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: false,
      classes:"myclass custom-class",
      position:"bottom",
      escapeToClose: "true"
    };       

  let paginationRequest = new PaginationRequest(this.page.toString(), this.pageSize.toString());

  this.store.dispatch(new GetCustomersAction(paginationRequest));

  // this.shoppingListServer.userID.pipe(takeUntil(this.ngUnsubscribe)).subscribe(userId => {
  //   this.UserID = userId;
  // });

   this.store.select(customersListSelector, takeUntil(this.ngUnsubscribe)).subscribe((res: Customer[]) => {
   // this.products = res;
   if(res) {
     this.customers = JSON.parse(JSON.stringify(res));
   }
  });

    // this.store.select(totalPriceSelector, takeUntil(this.ngUnsubscribe)).subscribe(value => {
    //   this.totalPrice = value;
    // });


    this.store.select(numberOfCustomersSelector, takeUntil(this.ngUnsubscribe)).subscribe(value => {
      this.numberOfCustomers = value;

      // if(this.numberOfProducts > 0) {
      //   this.existProductTobuy = true;
      // }
    });
    
    // this.store.select(shoppingListIDSelector, takeUntil(this.ngUnsubscribe)).subscribe((res: number) => {
    //   this.shoppingListID = res;
    // });
  }

  onItemSelect(item:any){
    this.page = 1;
    if (item.itemName === "All") {
      item.itemName = 200;
    }

    this.pageSize = item.itemName;
    let paginationRequest = new PaginationRequest(this.page.toString(), this.pageSize.toString());

    this.store.dispatch(new GetCustomersAction(paginationRequest));

    window.scrollTo(0,0);
  }
  OnItemDeSelect(item:any){

    this.store.dispatch(new ClearCustomersListAction());

   // window.scrollTo(0,0);
  }

  onDeleteProduct(index: number) {

    // const shoppingListDeleteRequest: ShoppingListDeleteRequest = {

    //   UserID: this.UserID,
    //   ShoppingListID: this.shoppingListID,
    //   ItemID: this.products[index].ItemID,
    //   //Delete one item from this type
    //   Quantity: 1,
    //   IndexToDelete: index
    // };

    // this.productListServer.setIsDisableAddButton(false);

    let customerId = this.customers[index].CustomerID;

    let customerDeleteRequest = new CustomerDeleteRequest(index, customerId);

    // this.store.dispatch(new ShoppingListActions.DeleteProductAction(shoppingListDeleteRequest));
    this.store.dispatch(new DeleteCustomerAction(customerDeleteRequest));
  }

  onPageChanged(newPage: number){

      this.page = newPage;

      let paginationRequest = new PaginationRequest(newPage.toString(), this.pageSize.toString());

      this.store.dispatch(new GetCustomersAction(paginationRequest));

      window.scrollTo(0,0);
    }
  
    onAddCustomer() {
      
    }

  // onUpdateQuantity(index: number, quantity: number) {

  //   const shoppingListUpdateQuantityRequest: ShoppingListUpdateQuantityRequest = {
  //     ShoppingListID: this.shoppingListID,
  //     ItemID: this.products[index].ItemID,
  //     Quantity: this.products[index].Quantity + quantity,
  //     IndexToUpdate: index,
  //     UpdatedTotalPrice: 0,
  //     UpdatedNumberOfProducts: 0,
  //     UpdatedProducts: this.products
  //   };

  //   this.store.dispatch(new ShoppingListActions.UpdateQuantityAction(shoppingListUpdateQuantityRequest));
  // }
}
