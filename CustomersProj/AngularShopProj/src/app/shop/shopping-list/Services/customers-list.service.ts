import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRootState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ApiURL } from 'src/app/api.model';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {  CustomerListState, Customer } from '../model/CustomersList.model';
import { PaginationRequest } from '../model/Pagination.model';


@Injectable()
export class CustomerListService {

    private UserID: string;

    private userIDSource = new BehaviorSubject<string>('');
    private previousNumberOfColumns: number = 0;
    userID = this.userIDSource.asObservable();

    constructor(
        private http: HttpClient,
        private store: Store<AppRootState>,
        private router: Router,
        private actions$: Actions
      ) {}

    getCustomersListProducts(paginationRequest: PaginationRequest): Observable<CustomerListState> {
      const apiUrl: string = ApiURL.getCustomers;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
          //'Content-Type': 'application/x-www-form-urlencoded'
        })
      };

      const body = JSON.stringify(paginationRequest);

      return this.httpCall(apiUrl, body);
    }

    addProduct(product: Customer): Observable<string> {
        const apiUrl: string = ApiURL.addNewCustomer;

        const body = JSON.stringify(product);
  
        return this.httpCall(apiUrl, body);
    }

    deleteProduct(customerIdToDelete: string): Observable<string> {
        const apiUrl: string = ApiURL.deleteCustomer;

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
           // 'Content-Type': 'application/x-www-form-urlencoded'
          })
        };

        const body = JSON.stringify(customerIdToDelete);

        return this.httpCall(apiUrl, body);
    }

  httpCall(apiUrl, body) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
       // 'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http
    .post<any>(apiUrl, body, httpOptions)
    .pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }
}

