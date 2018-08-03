import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';

@Injectable()
export class RestaurantService {
  constructor(private apiService: ApiService) {}
  restaurantList() {
    return this.apiService.get('restaurants');
  }
  submitForm(values) {
    return this.apiService.post('restaurants/create', values);
  }
}
