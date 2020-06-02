import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//mport { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { StoreModule } from '@ngrx/store';
//import * as fromApp from './store/app.reducer';
import * as fromApp from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TableModule } from 'primeng/table';
import { ShopViewShellComponent } from './shop/shop-view-shell/shop-view-shell.component';
import { LoginEffects } from './login/store/login.effects';
import { EffectsModule, EffectsRootModule, EffectSources } from '@ngrx/effects';
import { AuthenticationService } from './login/services/authentication.service';
import { ShopViewShellModule } from './shop/shop-view-shell/shop-view-shell.module';
import { ProductListEffects } from './shop/product-list/Store/product-list.effects';
import { ProductListService } from './shop/product-list/Services/product-list.service';
import { ShoppingListEffects } from './shop/shopping-list/Store/shopping-list.effects';
import { ShoppingListService } from './shop/shopping-list/Services/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ShopViewShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    StoreModule.forRoot(fromApp.rootReducers),
    StoreDevtoolsModule.instrument(),
		DialogModule,
		ButtonModule,
		InputTextModule,
    InputTextModule,
    EffectsModule.forRoot([
      LoginEffects,
      ProductListEffects,
      ShoppingListEffects]),
    ShopViewShellModule

  ],
  providers: [AuthenticationService, EffectsRootModule, EffectSources, LoginEffects, ProductListEffects, ProductListService, ShoppingListEffects, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
