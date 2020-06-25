import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppRootState } from 'src/app/reducers';
import { UserDetails } from 'src/app/login/login.model';
//import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { Actions, ofType } from '@ngrx/effects';

import { map } from 'rxjs/operators';
import { LOGIN_SUCCESS, LoginSuccessAction } from 'src/app/login/store/login.actions';





@Component({
  selector: 'app-shop-view-shell',
  templateUrl: './shop-view-shell.component.html',
  styleUrls: ['./shop-view-shell.component.scss']
})
export class ShopViewShellComponent implements OnInit {

  userName$: string = '';

  constructor(private store: Store<AppRootState>, private actions$: Actions) { 
    actions$.pipe(ofType(LOGIN_SUCCESS), map((loginAction: LoginSuccessAction) => loginAction.payload)).subscribe((res: UserDetails) => {
      this.userName$ = `Hello ${res.FirstName}, ${res.LastName}`; 
  });
  }

  ngOnInit() {

  }

}
