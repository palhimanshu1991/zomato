import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as appConstant from '../../services/app.constant';

@Injectable()
export class ProfileService {

  readonly rootUrl = appConstant.apiUrl;


  constructor(private http: HttpClient) {
   }

   userDetails()
   {
     return this.http.get(this.rootUrl+'/details');
   }
}
