import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './login/services/auth.guard';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), data: { preload: true }},
  { path: 'shop-view-shell', loadChildren: () => import('./shop/shop-view-shell/shop-view-shell.module').then(m => m.ShopViewShellModule), data: { preload: true } /*, canActivate: [AuthGuard]*/}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
