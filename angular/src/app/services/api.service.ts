import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { environment } from '../../environments/environment';


@Injectable()
export class ApiService {

  readonly rootUrl = environment.api_url;
  userToken : string;
  reqHeader : HttpHeaders;
  
  constructor(private http : HttpClient ) { 
    this.reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('userToken')});

    const LoginToken = localStorage.getItem('userToken');
    if(LoginToken) {
      this.userToken = LoginToken;
    }

  
  }

  get(route: string) {

    return this.http.get(this.rootUrl + route, {
      headers : this. reqHeader});
    
    }


  post(route : string, data: any) {

    return this.http.post(this.rootUrl + route, 
    data, {
    headers: this.reqHeader
    });
  
  }
  
}

