import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Location } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any;
  id: number;
  review_id: number;
  user_id: number;
  showComment = false;

  constructor(private reviewService: ReviewService, private activatedRoute: ActivatedRoute,
   private _location: Location) {
    this.activatedRoute.params.subscribe(params => this.id = params.id );
   }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.reviewService.getReviews(this.id).subscribe((data: any) => {
      this.reviews = data.review;
    });
  }

  postLike() {
    this.reviewService.postLike(this.review_id).subscribe(() => {
      console.log('liked');
      this._location.back();

    });
  }

  showComments() {
    this.showComment = true;
  }

  hideComments() {
    this.showComment = false;
  }

}
