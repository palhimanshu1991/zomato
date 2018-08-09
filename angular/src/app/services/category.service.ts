import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apiService: ApiService) {
  }

  create( data: any) {
    return this.apiService.post('categories/create', data);
  }

  list() {
    return this.apiService.get('categories');
  }
}
