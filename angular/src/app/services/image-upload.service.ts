import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ImageUploadService {

  constructor(private apiService: ApiService, private http: HttpClient) {
  }

  imageUpload(url: string, data: any) {


  }
}
