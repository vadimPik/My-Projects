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

@NgModule({
    imports: [
        ShopViewShellRoutingModule,
        CommonModule,
        FormsModule,
        MatCardModule,
        MatIconModule,
        FlexLayoutModule,
        NgxPaginationModule,
        MatChipsModule,
        MatSelectModule,
        AngularMultiSelectModule
    ],
    declarations: [CustomersListComponent],
    exports:[CustomersListComponent, MatSelectModule],
    providers: []
  })
  export class ShopViewShellModule {}