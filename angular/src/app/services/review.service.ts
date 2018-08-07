import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviewRoutes = '/reviews';

  constructor(private apiService: ApiService) { }


  getReviews(id) {
    return this.apiService.get('restaurants/' + id + this.reviewRoutes);
  }

  postReview(data, id) {
    return this.apiService.post('reviews/' + id, data);
  }

  postRating(data, id) {
    return this.apiService.post('ratings/' + id, data);
  }

  getReview(id) {
    return this.apiService.get('reviews/' + id);
  }

  postComment(data, id) {
    return this.apiService.post('reviews/comment/' + id, data);
  }

  postLike(data, id) {
    return this.apiService.post('like/' + id, data);
  }
}
