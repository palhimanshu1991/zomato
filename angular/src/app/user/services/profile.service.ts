import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as appConstant from '../../services/app.constant';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';

@Injectable()
export class ProfileService {

  readonly rootUrl = environment.apiUrl;



  constructor(private apiService: ApiService) {
   }

   userDetails() {
     return this.apiService.get('details');
   }

   updateDetails(data) {
     return this.apiService.post( 'details', data);
   }
}
