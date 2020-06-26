import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/shop/shopping-list/model/CustomersList.model';
import { FormGroup, FormBuilder, FormControl, AbstractControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { AppRootState } from 'src/app/reducers';
import { AddCustomerAction } from 'src/app/shop/shopping-list/Store/Customers-list.actions';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-popap-dialog-modal',
  templateUrl: './popap-dialog-modal.component.html',
  styleUrls: ['./popap-dialog-modal.component.scss']
})
export class PopapDialogModalComponent implements OnInit {

  fromPage: string;
  newCustomer: Customer;

  //fromDialog: string;
  //newCustomersForm: FormGroup;

  customerID: string;
  customerName: string;
  customerEmail: string;
  customerAdress: string;

 // constructor(public dialogRef: MatDialogRef<PopapDialogModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PopapDialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<AppRootState>) {

    this.newCustomer = data.newCustomer;
   }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
  }

  CustomerID = new FormControl('', [Validators.required]);
  CustomerName = new FormControl('', [Validators.required]);
  CustomerEmail = new FormControl('', [Validators.required, Validators.email]);
  CustomerAdress = new FormControl('', [Validators.required]);

  newCustomersForm = new FormGroup({
    CustomerID: this.CustomerID,
    CustomerName: this.CustomerName,
    CustomerEmail: this.CustomerEmail,
    CustomerAdress: this.CustomerAdress
  }); 

  matcher = new MyErrorStateMatcher();

  // newCustomersForm = new FormGroup({
  //   CustomerID: new FormControl('', [Validators.required]),
  //   CustomerName: new FormControl('', [Validators.required]),
  //   CustomerEmail: new FormControl('', [Validators.required, Validators.email]),
  //   CustomerAdress: new FormControl('', [Validators.required]),
  // }); 



  //   this.newCustomersForm = new FormGroup({
  //     CustomerID: new FormControl('', [this.inputValidator.bind(this)]),
  //     CustomerName: new FormControl('', [this.inputValidator.bind(this)]),
  //     CustomerEmail: new FormControl('', [this.inputValidator.bind(this)]),
  //     CustomerAdress: new FormControl('', [this.inputValidator.bind(this)]),
  //   });
  // }

  // //Validate that the input not empty
  // inputValidator(control: AbstractControl): { [key: string]: boolean } {
  //   if (control.value.trim() !== '') {
  //     return null;
  //   }
  
  //   return { inputNotEmpty: true };
  // }

  onFormKeyDown(event): void {
    if (this.newCustomersForm.valid && event.keyCode === 13) {
     // this.onLogin();
     this.closeDialog();
    }
  }

  closeDialog() {

    // const newCustomerToAdd: Customer = {
    //   CustomerID: this.newCustomersForm.value.CustomerID,
    //   CustomerName: this.newCustomersForm.value.CustomerName,
    //   CustomerEmail: this.newCustomersForm.value.CustomerEmail,
    //   CustomerAdress: this.newCustomersForm.value.CustomerAdress,
    // };

    //  this.store.dispatch(new LoginAction(loginValues));
 

  //  this.dialogRef.close({ event: 'close', data: newCustomerToAdd });
  }


  add() {
    let newCustomerToAdd = new Customer(this.newCustomersForm.value.CustomerID, this.newCustomersForm.value.CustomerName, 
                                        this.newCustomersForm.value.CustomerEmail, this.newCustomersForm.value.CustomerAdress);

    this.store.dispatch(new AddCustomerAction(newCustomerToAdd));

    
    this.dialogRef.close(newCustomerToAdd);
    //this.dialogRef.close(this.newCustomersForm.value);
}

  close() {
      this.dialogRef.close();
  }
}
