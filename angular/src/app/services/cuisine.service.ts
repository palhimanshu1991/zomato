import {Injectable} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from './api.service';

@Injectable()
export class CuisineService {

  constructor(private apiService: ApiService) {
  }

  create( data: any) {
    return this.apiService.post('cuisines/create', data);
  }

  list() {
    return this.apiService.get('cuisines');
  }
}
