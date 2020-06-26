// import { Injectable } from '@angular/core';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { Observable, of as observableOf, of} from 'rxjs';
// import { LoginAction, LOGIN, LoginFailedAction, LoginSuccessAction } from './login.actions';
// import { catchError, map, switchMap, tap, concatMapTo, mapTo, mergeMap } from 'rxjs/operators';
// import { User, UserDetails } from '../login.model';
// import { AuthenticationService } from '../services/authentication.service';
// import { Store, select } from '@ngrx/store';
// import { AppRootState } from 'src/app/reducers';
// import { Router } from '@angular/router';


// @Injectable()
// export class LoginEffects {

//   @Effect()
//   login$: Observable<any> = this.actions.pipe(
//     ofType<LoginAction>(LOGIN),
//     switchMap(action => {
//       return this.authenticationService.login(action.payload).pipe(
//         map((res: UserDetails) => {
//           if(res && res.UserID) {
//             this.router.navigate(['shop-view-shell']);
//             return new LoginSuccessAction(res);
//           }
//           else {
//             alert ("User Not Exist, or bad UserName/Password");
//             return new LoginFailedAction(res);
//           }
//         }),
//         catchError(err => {
//           return observableOf(new LoginFailedAction(err));
//         }
//         )
//       );
//       })
//   );

//     constructor(
//         private actions: Actions,
//         private authenticationService: AuthenticationService,
//         private store: Store<AppRootState>,
//         private router: Router
//       ) {}
// }