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
import * as fromApp from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TableModule } from 'primeng/table';
import { ShopViewShellComponent } from './shop/shop-view-shell/shop-view-shell.component';
//import { LoginEffects } from './login/store/login.effects';
import { EffectsModule, EffectsRootModule, EffectSources } from '@ngrx/effects';
//import { AuthenticationService } from './login/services/authentication.service';
import { ShopViewShellModule } from './shop/shop-view-shell/shop-view-shell.module';
import { CustomersListEffects } from './shop/shopping-list/Store/customers-list.effects';
import { CustomerListService } from './shop/shopping-list/Services/customers-list.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
//import { PopapDialogModalComponent } from './Models/popap-dialog-modal/popap-dialog-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    ShopViewShellComponent,
  //  PopapDialogModalComponent,
    // ProductComponent
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
    StoreModule.forRoot(fromApp.rootReducers, {
      runtimeChecks : {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument(),
		DialogModule,
		ButtonModule,
		InputTextModule,
    InputTextModule,
    EffectsModule.forRoot([
     // LoginEffects,
      CustomersListEffects]),
    ShopViewShellModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule
  //  NgbModule.forRoot()

  ],
  providers: [ EffectsRootModule, EffectSources, CustomersListEffects, CustomerListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
