import { Injectable} from '@angular/core';
import {catchError} from "rxjs/operators";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from '../../environments/environment';
import {ApiService} from './api.service';

@Injectable()
export class ImageUploadService {

  constructor(private apiService:ApiService) {
  }

  imageUpload(request: any, id: number) {
    console.log(id);
    return this.apiService.post('restaurants/images/' + id, request);
  }
}
