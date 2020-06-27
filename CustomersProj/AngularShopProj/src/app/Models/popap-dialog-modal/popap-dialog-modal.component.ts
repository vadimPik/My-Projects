import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/shop/shopping-list/model/CustomersList.model';
import { FormGroup, FormBuilder, FormControl, AbstractControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { AppRootState } from 'src/app/reducers';


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
  CustomerFromParentPage: Customer;
  duplicateError: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PopapDialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<AppRootState>) {

      if(data.newCustomer) {
        this.CustomerFromParentPage = data.newCustomer;
  
        this.duplicateError = data.duplicateError;
        this.initializeForm(data.newCustomer.CustomerID, data.newCustomer.CustomerName, data.newCustomer.CustomerEmail, data.newCustomer.CustomerAdress);
      }
   }

   CustomerID: any;
   CustomerName: any;
   CustomerEmail: any;
   CustomerAdress: any;
   matcher: any;
   newCustomersForm : FormGroup;
  ngOnInit(): void {
 //   this.initializeForm("", "", "", "");
  }

  initializeForm(customerID: string, customerName: string, customerEmail: string, customerAddress: string) {

    this.CustomerID = new FormControl('', [Validators.required]);
    this.CustomerName = new FormControl('', [Validators.required]);
    this.CustomerEmail = new FormControl('', [Validators.required, Validators.email]);
    this.CustomerAdress = new FormControl('', [Validators.required]);
  
    this.newCustomersForm = new FormGroup({
      CustomerID: this.CustomerID,
      CustomerName: this.CustomerName,
      CustomerEmail: this.CustomerEmail,
      CustomerAdress: this.CustomerAdress
    }); 
  
    this.newCustomersForm.patchValue({
      CustomerID: customerID,
      CustomerName: customerName,
      CustomerEmail: customerEmail,
      CustomerAdress: customerAddress
    });

    this.matcher = new MyErrorStateMatcher();
  }

  onFormKeyDown(event): void {
    if (this.newCustomersForm.valid && event.keyCode === 13) {
     this.add();
    }
  }

  add() {


    let newCustomerToAdd = new Customer(this.newCustomersForm.value.CustomerID, this.newCustomersForm.value.CustomerName, 
                                        this.newCustomersForm.value.CustomerEmail, this.newCustomersForm.value.CustomerAdress);

    this.dialogRef.close(newCustomerToAdd);
}

  close() {
      this.dialogRef.close();
  }
}
