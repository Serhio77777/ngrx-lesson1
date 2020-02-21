import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, tap, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { CustomerActionTypes, CustomerSend } from '../actions/customers.actions'; 


@Injectable()
export class TestEffects {

  constructor(
    private httpClient: HttpClient,
    private actions$: Actions
  ) {}      

  @Effect()
  test$: Observable<any> = this.actions$.pipe(
    ofType(CustomerActionTypes.Add),
    switchMap(() => {
      console.log('effect')
      return this.httpClient.get<string>('http://httpbin.org/ip')
        .pipe(
          map((data) => {
            // console.log('Effect')
            return new CustomerSend(data);
          })
        )
    })
  );
}