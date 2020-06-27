import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppRootState } from 'src/app/reducers';
import { takeUntil, map } from 'rxjs/operators';
import { numberOfCustomersSelector, customersListSelector } from './Store/customers-list.selector';
import { Actions, ofType } from '@ngrx/effects';
import { CustomerListService } from './Services/customers-list.service';
import { GetCustomersAction, ClearCustomersListAction, DeleteCustomerAction, DELETE_CUSTOMERS_SUCCESS, ADD_CUSTOMERS_SUCCESS, AddCustomerAction, DeleteCustomerSuccessAction, AddCustomerSuccessAction } from './Store/Customers-list.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationRequest } from './model/Pagination.model';
import { Customer, CustomerDeleteRequest } from './model/CustomersList.model';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopapDialogModalComponent } from '../../Models/popap-dialog-modal/popap-dialog-modal.component';

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

 // dialogValue: string;
  newCustomerFromDialogValue: Customer;
  sendValue: Customer;

  sortingOrderASC: boolean = true;


  constructor(private store: Store<AppRootState>, private customerListServer:CustomerListService,  private route: ActivatedRoute,
              private router: Router, public dialog: MatDialog, private actions$: Actions  ) {

    actions$.pipe(ofType(ADD_CUSTOMERS_SUCCESS), map((duplicateError: AddCustomerSuccessAction) => duplicateError.payload)).subscribe((res: string)=> {
      
      if (res.includes("successfully")) {
        let paginationRequest = new PaginationRequest(this.page.toString(), this.pageSize.toString(), "ID", "DESC");
        this.store.dispatch(new GetCustomersAction(paginationRequest));
      }

      else {
        const dialogRef = this.dialog.open(PopapDialogModalComponent, {
          width: '25%',
          panelClass: 'custom-dialog-container',
          autoFocus: true,
          disableClose: true,
          data: { newCustomer: this.newCustomerFromDialogValue, duplicateError: res }
        });
    
        dialogRef.afterClosed().subscribe((result: Customer)  => {
          console.log('The dialog was closed', result);
          this.newCustomerFromDialogValue = result;

          if(result.CustomerID) {
            this.store.dispatch(new AddCustomerAction(result));
          }
          
        });
        
      }
    })


    actions$.pipe(ofType(DELETE_CUSTOMERS_SUCCESS), map((duplicateError: DeleteCustomerSuccessAction) => duplicateError.payload)).subscribe((res: string)=> {

      let paginationRequest = new PaginationRequest(this.page.toString(), this.pageSize.toString(), "ID", "DESC");
      this.store.dispatch(new GetCustomersAction(paginationRequest));
    })
    
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

  let paginationRequest = new PaginationRequest(this.page.toString(), this.pageSize.toString(), "ID", "DESC");

  this.store.dispatch(new GetCustomersAction(paginationRequest));

   this.store.select(customersListSelector, takeUntil(this.ngUnsubscribe)).subscribe((res: Customer[]) => {
   if(res) {
     this.customers = JSON.parse(JSON.stringify(res));
   }
  });

    this.store.select(numberOfCustomersSelector, takeUntil(this.ngUnsubscribe)).subscribe((value: number) => {
      this.numberOfCustomers = value;
    });
  }

  onItemSelect(item:any){
    this.page = 1;
    if (item.itemName === "All") {
      item.itemName = 200;
    }

    this.pageSize = item.itemName;
    let paginationRequest = new PaginationRequest(this.page.toString(), this.pageSize.toString(), "ID", "DESC");

    this.store.dispatch(new GetCustomersAction(paginationRequest));

    window.scrollTo(0,0);
  }
  OnItemDeSelect(item:any){

    this.store.dispatch(new ClearCustomersListAction());

   // window.scrollTo(0,0);
  }

  onDeleteProduct(index: number) {

    let customerId = this.customers[index].CustomerID;

    let customerDeleteRequest = new CustomerDeleteRequest(index, customerId);

    this.store.dispatch(new DeleteCustomerAction(customerDeleteRequest));
  }

  onPageChanged(newPage: number){

      this.page = newPage;

      let paginationRequest = new PaginationRequest(newPage.toString(), this.pageSize.toString(), "ID", "DESC");

      this.store.dispatch(new GetCustomersAction(paginationRequest));

      window.scrollTo(0,0);
    }


    openDialog(): void {

      let emptyCustomer = new Customer("", "", "", "");

      const dialogRef = this.dialog.open(PopapDialogModalComponent, {
        width: '25%',
        panelClass: 'custom-dialog-container',
        autoFocus: true,
        disableClose: true,
        data: { newCustomer: emptyCustomer }
      });
  
      dialogRef.afterClosed().subscribe((result: Customer)  => {
        console.log('The dialog was closed', result);
        this.newCustomerFromDialogValue = result;
        
        if(result.CustomerID) {
          this.store.dispatch(new AddCustomerAction(result));
        }
        
      });
    }


    sortByName(): void {

      this.sortingOrderASC = !this.sortingOrderASC;

      let paginationRequest: PaginationRequest; 

      if (this.sortingOrderASC) {
        paginationRequest = new PaginationRequest(this.page.toString(), this.pageSize.toString(), "CustomerName", "ASC");
      }

      else {
        paginationRequest = new PaginationRequest(this.page.toString(), this.pageSize.toString(), "CustomerName", "DESC");
      }

      this.store.dispatch(new GetCustomersAction(paginationRequest));

      window.scrollTo(0,0);
    }

    sortByEmail(): void {

      this.sortingOrderASC = !this.sortingOrderASC;

      let paginationRequestEmail: PaginationRequest; 


      if (this.sortingOrderASC) {
        paginationRequestEmail = new PaginationRequest(this.page.toString(), this.pageSize.toString(), "CustomerEmail", "ASC");
      }

      else {
        paginationRequestEmail = new PaginationRequest(this.page.toString(), this.pageSize.toString(), "CustomerEmail", "DESC");
      }
      this.store.dispatch(new GetCustomersAction(paginationRequestEmail));

      window.scrollTo(0,0);
      
    }
}
