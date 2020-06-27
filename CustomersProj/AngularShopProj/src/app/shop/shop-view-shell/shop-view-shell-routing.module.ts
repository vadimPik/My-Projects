import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShopViewShellComponent } from './shop-view-shell.component';

const routes: Routes = [
    
        {path: '', component: ShopViewShellComponent},
    

        { path: '', pathMatch: 'full', redirectTo: 'main' },
        { path: 'about', loadChildren: () => import('../../about/about.module').then(m => m.AboutModule), data: { preload: true }},
        { path: 'main', loadChildren: () => import('../shopping-list/customers-list.module').then(m => m.CustomersListModule), data: { preload: true } /*, canActivate: [AuthGuard]*/}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopViewShellRoutingModule {}
