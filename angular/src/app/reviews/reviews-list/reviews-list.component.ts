import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { Review } from '../../models/Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsListComponent implements OnInit {
  reviews: any;
  restaurant_id: number;
  review_id: number;
  user_id: number;
  showComment = false;

  constructor(
    private reviewService: ReviewService,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private userService: UserService
  ) {
    this.restaurant_id =  +this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.reviewService.getReviewsList(this.restaurant_id).subscribe((data: any) => {
      this.reviews = data.review;
    });

    this.userService.userDetails().subscribe((data: any) => {
      this.user_id = data.success.user.id;
    });
  }
  back() {
    this._location.back();
  }
}
