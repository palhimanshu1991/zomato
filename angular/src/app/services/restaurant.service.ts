import {Injectable} from '@angular/core';

import {catchError} from "rxjs/operators";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from '../../environments/environment';
import {ApiService} from './api.service';

@Injectable()
export class RestaurantService {

  constructor(private apiService: ApiService) {

  }

  restaurantList() {
    return this.apiService.get('restaurants');
  }

  submitForm(values) {
    return this.apiService.post('restaurants/create', values);
  }

  find(value: number) {
    // console.log('restaurants/'+value);
    return this.apiService.get('restaurants/' + value);
  }

  updateForm(values, id) {
    return this.apiService.post('restaurants/' + id + '/update', values);
  }


  // getImage(imageUrl: string): Observable<Blob> {
  //   return this.httpClient.get(imageUrl, {responseType: 'blob'});
  // }


}
