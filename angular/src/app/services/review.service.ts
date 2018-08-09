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
    return this.apiService.post('reviews/comment/' + id + '/?type=review', data);
  }

  postLike(data, id) {
    return this.apiService.post('like/' + id + '/?type=review', data);
  }

  addImage(data, id) {
    return this.http.post(this.rootUrl + 'image-upload/' + id + '?type=review', data);
  }
}
