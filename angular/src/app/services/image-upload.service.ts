import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class ImageUploadService {

  constructor(private apiService: ApiService) {
  }

  imageUpload(route: string, data: any) {
    return this.apiService.post(route, data);
  }
}
