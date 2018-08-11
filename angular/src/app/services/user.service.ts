import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ApiService} from './api.service';

@Injectable()
export class UserService {

  readonly rootUrl = environment.apiUrl;
  userToken: string;

  constructor(private http: HttpClient, private apiService: ApiService) {
    const loggedInToken = localStorage.getItem('userToken');
    if (loggedInToken) {
      this.userToken = loggedInToken;
    }
  }

  registerUser(user) {
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});

    return this.http.post(this.rootUrl + 'register', user, {
      headers: reqHeader
    }).pipe(
      catchError(this._handleError)
    );
  }


  userAuthentication(email, password) {
    const data = {'email': email, 'password': password};
    // tslint:disable-next-line:max-line-length
    const reqHeader = new HttpHeaders(
      {
        'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization, Content-Type'
      });

    return this.http.post(this.rootUrl + 'login', data, {headers: reqHeader});
  }

  private _handleError(err: HttpErrorResponse | any) {

    // const errorMsg = err.message || 'Unable to retrieve data';
    const errorMsg = err;
    return Observable.throw(errorMsg);

  }

  isLoggedIn() {
    const loggedInToken = localStorage.getItem('userToken');
    if (loggedInToken) {
      return true;
    } else {
      return false;
    }
  }

  userDetails() {
    return this.apiService.get('details');
  }

  logout() {
    // localStorage.clear();
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
  }

}
