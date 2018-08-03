import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviewRoutes = '/reviews';

  constructor(private apiService: ApiService) { }


  getReviews() {
    return this.apiService.get(this.reviewRoutes);

  }
}
