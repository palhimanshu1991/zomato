import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly rootUrl = environment.apiUrl;
  userToken: string;
  requestHeader: any;
  imageHeader: any;

  header = new HttpHeaders({
    Authorization: 'Bearer ' + this.userToken,
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type'
  });

  constructor(private http: HttpClient) {
    this.userToken = localStorage.getItem('userToken');
    this.requestHeader = new HttpHeaders({
      Authorization: 'Bearer ' + this.userToken,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Authorization, Content-Type'
    });

    this.imageHeader = new HttpHeaders({
      Authorization: 'Bearer ' + this.userToken,
      'Content-Type': 'image/jpeg',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Authorization, Content-Type'
    });
  }

  get(route: string) {
    return this.http
      .get(this.rootUrl + route, { headers: this.requestHeader })
      .pipe(catchError(this._handleError));
  }

  post(route: string, data: any) {
    return this.http
      .post(this.rootUrl + route, data, { headers: this.requestHeader })
      .pipe(catchError(this._handleError));
  }

  postLike(route: string) {
    return this.http
      .post(this.rootUrl + route, { headers: this.requestHeader });
  }

  put(route: string, data: any) {
    return this.http
      .put(this.rootUrl + route, data, { headers: this.requestHeader })
      .pipe(catchError(this._handleError));
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err;
    return Observable.throw(errorMsg);
  }

  getImage() {
    return this.http.get(this.rootUrl + 'image' , {headers: this.header });
  }
}
