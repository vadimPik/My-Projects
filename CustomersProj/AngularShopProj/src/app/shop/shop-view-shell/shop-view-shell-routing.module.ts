import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShopViewShellComponent } from './shop-view-shell.component';
//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';

const routes: Routes = [
    
        {path: '', component: ShopViewShellComponent},
    
        // children: [
        //     { path: '', pathMatch: 'full', redirectTo: 'main' },
        //     { path: 'about', loadChildren: () => import('../../about/about.module').then(m => m.AboutModule), data: { preload: true }},
        //     { path: 'main', loadChildren: () => import('../shopping-list/customers-list.module').then(m => m.CustomersListModule), data: { preload: true } /*, canActivate: [AuthGuard]*/}
        // ]

        { path: '', pathMatch: 'full', redirectTo: 'main' },
        { path: 'about', loadChildren: () => import('../../about/about.module').then(m => m.AboutModule), data: { preload: true }},
        { path: 'main', loadChildren: () => import('../shopping-list/customers-list.module').then(m => m.CustomersListModule), data: { preload: true } /*, canActivate: [AuthGuard]*/}


        // children: [
        // { path: 'x', redirectTo: 'about', pathMatch: 'prefix' },
        // { path: 'about', loadChildren: () => import('../../about/about.module').then(m => m.AboutModule), data: { preload: true }},
        // { path: 'main', loadChildren: () => import('../shopping-list/customers-list.module').then(m => m.CustomersListModule), data: { preload: true } /*, canActivate: [AuthGuard]*/}
        // ]
        
        
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopViewShellRoutingModule {}



// import { Routes, RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { ShopViewShellComponent } from './shop-view-shell.component';

// const routes: Routes = [
//     {
//         path: '',
//         component: ShopViewShellComponent
//     }
// ];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class ShopViewShellRoutingModule {}