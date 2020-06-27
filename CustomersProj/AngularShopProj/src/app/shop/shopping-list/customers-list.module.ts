
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersListComponentRoutingModule } from './customers-list-routing.module';
import { CustomersListComponent } from './customers-list.component';
import { PopapDialogModalComponent } from 'src/app/Models/popap-dialog-modal/popap-dialog-modal.component';



import { FormsModule } from '@angular/forms';
// import {MatCardModule} from '@angular/material/card';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import {  ReactiveFormsModule} from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
//import { ShopViewShellComponent } from './shop-view-shell.component';
//import { AboutComponent } from 'src/app/about/about.component';
//import { AboutModule } from 'src/app/about/about.module';

@NgModule({
    imports:[CommonModule,
           CustomersListComponentRoutingModule,
        //    AboutModule,
           // BrowserModule,
            ReactiveFormsModule,
          //  ShopViewShellRoutingModule,
            
            FormsModule,
            MatCardModule,
            MatIconModule,
            FlexLayoutModule,
            NgxPaginationModule,
            MatChipsModule,
            MatSelectModule,
            AngularMultiSelectModule,
            MatFormFieldModule,
            MatDialogModule,
            MatInputModule,
            MatButtonModule,
            MatSortModule
            ],
    declarations: [CustomersListComponent,PopapDialogModalComponent],
    exports:[MatSelectModule],
   // declarations: [CustomersListComponent],

})
export class CustomersListModule {}