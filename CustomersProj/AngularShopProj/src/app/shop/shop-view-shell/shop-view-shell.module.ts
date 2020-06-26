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
import { PopapDialogModalComponent } from 'src/app/Models/popap-dialog-modal/popap-dialog-modal.component';
import {  ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        ReactiveFormsModule,
        ShopViewShellRoutingModule,
        CommonModule,
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
        MatButtonModule
    ],
    declarations: [CustomersListComponent, PopapDialogModalComponent],
    exports:[CustomersListComponent, MatSelectModule],
    providers: []
  })
  export class ShopViewShellModule {}