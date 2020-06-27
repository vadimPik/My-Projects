import { NgModule } from '@angular/core';
import { ShopViewShellRoutingModule } from './shop-view-shell-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { ShopViewShellComponent } from './shop-view-shell.component';
import { CustomersListModule } from '../shopping-list/customers-list.module';

@NgModule({
    imports: [
        CustomersListModule,
        ShopViewShellRoutingModule
    ],
      declarations: [ ShopViewShellComponent],
   exports:[MatSelectModule],
    providers: []
  })
  export class ShopViewShellModule {}
