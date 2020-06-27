import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: '', loadChildren: () => import('./shop/shop-view-shell/shop-view-shell.module').then(m => m.ShopViewShellModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
