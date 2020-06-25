import { NgModule } from '@angular/core';
import { ShopViewShellRoutingModule } from './shop-view-shell-routing.module';
import { ProductListComponent } from '../product-list/product-list.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
// import {MatCardModule} from '@angular/material/card';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
    imports: [
        ShopViewShellRoutingModule,
        CommonModule,
        FormsModule,
        MatCardModule,
        MatIconModule,
        FlexLayoutModule,
        NgxPaginationModule,
        MatChipsModule
    ],
    declarations: [ProductListComponent, ShoppingListComponent, ProductComponent],
    exports:[ProductListComponent, ShoppingListComponent, ProductComponent],
    providers: []
  })
  export class ShopViewShellModule {}