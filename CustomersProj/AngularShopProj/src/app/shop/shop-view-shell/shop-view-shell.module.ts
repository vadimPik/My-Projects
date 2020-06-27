import { NgModule } from '@angular/core';
import { ShopViewShellRoutingModule } from './shop-view-shell-routing.module';
import { CustomersListComponent } from '../shopping-list/customers-list.component';
import { CommonModule } from '@angular/common';
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
import { PopapDialogModalComponent } from 'src/app/Models/popap-dialog-modal/popap-dialog-modal.component';
import {  ReactiveFormsModule} from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
import { ShopViewShellComponent } from './shop-view-shell.component';
//import { AboutComponent } from 'src/app/about/about.component';
import { CustomersListModule } from '../shopping-list/customers-list.module';
//import { AboutModule } from 'src/app/about/about.module';

@NgModule({
    imports: [
       // ShopViewShellRoutingModule,
    //    AboutModule,
        CustomersListModule,
       // BrowserModule,
     //   ReactiveFormsModule,
        ShopViewShellRoutingModule,
        // CommonModule,
        // FormsModule,
        // MatCardModule,
        // MatIconModule,
        // FlexLayoutModule,
        // NgxPaginationModule,
        // MatChipsModule,
        // MatSelectModule,
        // AngularMultiSelectModule,
        // MatFormFieldModule,
        // MatDialogModule,
        // MatInputModule,
        // MatButtonModule,
        // MatSortModule
    ],
  //  declarations: [PopapDialogModalComponent, AboutComponent, CustomersListComponent, ShopViewShellComponent],
  //  declarations: [ ShopViewShellComponent],
  //  exports:[MatSelectModule],
      declarations: [ ShopViewShellComponent],
   exports:[MatSelectModule],
    providers: []
  })
  export class ShopViewShellModule {}




//   import { NgModule } from '@angular/core';
// import { ShopViewShellRoutingModule } from './shop-view-shell-routing.module';
// import { CustomersListComponent } from '../shopping-list/customers-list.component';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// // import {MatCardModule} from '@angular/material/card';
// import {MatCardModule} from '@angular/material/card';
// import {MatIconModule} from '@angular/material/icon';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import {NgxPaginationModule} from 'ngx-pagination';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatSelectModule } from '@angular/material/select';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSortModule } from '@angular/material/sort';
// import { PopapDialogModalComponent } from 'src/app/Models/popap-dialog-modal/popap-dialog-modal.component';
// import {  ReactiveFormsModule} from '@angular/forms';

// @NgModule({
//     imports: [
//         ReactiveFormsModule,
//         ShopViewShellRoutingModule,
//         CommonModule,
//         FormsModule,
//         MatCardModule,
//         MatIconModule,
//         FlexLayoutModule,
//         NgxPaginationModule,
//         MatChipsModule,
//         MatSelectModule,
//         AngularMultiSelectModule,
//         MatFormFieldModule,
//         MatDialogModule,
//         MatInputModule,
//         MatButtonModule,
//         MatSortModule
//     ],
//     declarations: [],
//     exports:[ MatSelectModule],
//     providers: []
//   })
//   export class ShopViewShellModule {}