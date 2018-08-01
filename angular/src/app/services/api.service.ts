import { Injectable } from '@angular/core';
import { apiUrl } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  readonly rootUrl = apiUrl;
  userToken: string;
  requestHeader: any;

  header = new HttpHeaders({
    'Authorization': 'Bearer ' + this.userToken,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type'
  });

  constructor(private http: HttpClient) {
    this.userToken = localStorage.getItem('userToken');
    this.requestHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + this.userToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Authorization, Content-Type'
    });
  }

  get(route: string) {
    return this.http.get(this.rootUrl + route, { headers: this.requestHeader }).pipe(
      catchError(this._handleError)
    );
  }

  post(route: string, data: any) {
    return this.http.post(this.rootUrl + route, data, { headers: this.requestHeader }).pipe(
      catchError(this._handleError)
    );
  }

  private _handleError(err: HttpErrorResponse | any) {

    const errorMsg = err;
    return Observable.throw(errorMsg);

  }
}
