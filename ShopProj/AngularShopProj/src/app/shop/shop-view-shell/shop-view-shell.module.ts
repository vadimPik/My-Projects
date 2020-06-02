import { NgModule } from '@angular/core';
import { ShopViewShellRoutingModule } from './shop-view-shell-routing.module';
import { ProductListComponent } from '../product-list/product-list.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ShopViewShellRoutingModule,
        CommonModule,
        FormsModule
    ],
    declarations: [ProductListComponent, ShoppingListComponent],
    exports:[ProductListComponent, ShoppingListComponent],
    providers: []
  })
  export class ShopViewShellModule {}