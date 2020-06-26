// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { AppRootState } from 'src/app/reducers';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { ApiURL } from 'src/app/api.model';
// import { catchError } from 'rxjs/operators';
// import { throwError, Observable, BehaviorSubject } from 'rxjs';
// import { Product, ProductListState } from '../model/customers.model';

// @Injectable()
// export class ProductListService {

//     private disableAddButtonDSource = new BehaviorSubject<boolean>(false);
//     private previousNumberOfColumns: number = 0;
//     isDisableAddButton = this.disableAddButtonDSource.asObservable();

//     constructor(
//         private http: HttpClient,
//         private store: Store<AppRootState>,
//         private router: Router,
//       ) {}

//     setIsDisableAddButton(value: boolean) {
//         this.disableAddButtonDSource.next(value);
//     }

//     getProducts(): Observable<ProductListState> {
//         const apiUrl: string = ApiURL.getProducts;
//         const httpOptions = {
//           headers: new HttpHeaders({
//             //'Content-Type':  'application/json'
//             'Content-Type': 'application/x-www-form-urlencoded'
//           })
//         };
    
//         return this.http
//             .get<ProductListState>(apiUrl, httpOptions)
//             .pipe(
//               catchError(error => {
//                 return throwError(error);
//               })
//             );
//     }
// }
