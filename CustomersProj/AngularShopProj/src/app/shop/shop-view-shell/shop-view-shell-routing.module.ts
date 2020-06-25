import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShopViewShellComponent } from './shop-view-shell.component';

const routes: Routes = [
    {
        path: '',
        component: ShopViewShellComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopViewShellRoutingModule {}