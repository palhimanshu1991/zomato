import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviewRoutes = '/reviews';
  rootUrl = environment.apiUrl;

  constructor(private apiService: ApiService, private http: HttpClient) { }


  getReviewsList(restaurant_id) {
    return this.apiService.get('restaurants/' + restaurant_id + this.reviewRoutes);
  }

  postReview(data, restaurant_id) {
    return this.apiService.post('reviews/' + restaurant_id, data);
  }

  getReview(review_id) {
    return this.apiService.get('reviews/' + review_id);
  }

  postComment(data, review_id) {
    return this.apiService.post('comment/' + review_id + '?type=review', data);
  }

  postLike(data, review_id) {
    return this.apiService.post('like/' + review_id + '/?type=review', data);
  }

  addImage(data, review_id) {
    return this.http.post(this.rootUrl + 'image-upload/' + review_id + '?type=review', data);
  }
}
