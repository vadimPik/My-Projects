// import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
// import { Store } from '@ngrx/store';
// import { Router } from '@angular/router';
// import { catchError, map } from 'rxjs/operators';
// import { AppRootState } from 'src/app/reducers';
// import { User } from '../login.model';
// import { throwError } from 'rxjs';
// import { ApiURL } from 'src/app/api.model';
// import { ofType, Actions } from '@ngrx/effects';
// import {  } from 'rxjs/operators';
// import { LOGIN_SUCCESS, LoginSuccessAction } from 'src/app/login/store/login.actions';
// import { UserDetails } from 'src/app/login/login.model';


// @Injectable()
// export class AuthenticationService {

//   loginAuthonticate: boolean = false;

//     constructor(
//         private http: HttpClient,
//         private store: Store<AppRootState>,
//         public router: Router,
//         private actions$: Actions
//       ) {

//         actions$.pipe(ofType(LOGIN_SUCCESS), map((loginAction: LoginSuccessAction) => loginAction.payload)).subscribe((res: UserDetails) => {
//           this.loginAuthonticate = true;
//         });
//       }
      
//     login(user: User): any {
//         const apiUrl: string = ApiURL.login;
//         const httpOptions = {
//           headers: new HttpHeaders({
//             //'Content-Type':  'application/json'
//             'Content-Type': 'application/x-www-form-urlencoded'
//           })
//         };
    
//         const body = new HttpParams()
//           .set('userName', user.userName)
//           .set('password', encodeURIComponent(user.password)) 
    
//           return this.http
//             .post<any>(apiUrl, body, httpOptions)
//             .pipe(
//               catchError(error => {
//                 return throwError(error);
//               })
//             );
//       }


//       isAuthenticated(): boolean {

//         if ( this.loginAuthonticate ) {
//           return true;
//         } else {
//           return false;
//         }
//       }



// }