import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  // { path: '', pathMatch: 'full', redirectTo: 'shop-view-shell' },
  // { path: 'shop-view-shell', loadChildren: () => import('./shop/shop-view-shell/shop-view-shell.module').then(m => m.ShopViewShellModule), data: { preload: true } /*, canActivate: [AuthGuard]*/}


  { path: '', loadChildren: () => import('./shop/shop-view-shell/shop-view-shell.module').then(m => m.ShopViewShellModule) },


      //  { path: '', redirectTo: 'main', pathMatch: 'prefix' },
      //   { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule), data: { preload: true }},
      //   { path: 'main', loadChildren: () => import('./shop/shopping-list/customers-list.module').then(m => m.CustomersListModule), data: { preload: true } /*, canActivate: [AuthGuard]*/}


  // { path: '', loadChildren: () => import('./shop/shopping-list/customers-list.module').then(m => m.CustomersListModule), data: { preload: true } /*, canActivate: [AuthGuard]*/},
  // { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule), data: { preload: true }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
