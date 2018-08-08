import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Location } from '../../../../node_modules/@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-review-show',
  templateUrl: './review-show.component.html',
  styleUrls: ['./review-show.component.css']
})
export class ReviewShowComponent implements OnInit {


  review: any;
  id: any;
  restaurant_id: number;
  rating: any;
  data: any;
  showComment = false;
  user_id: number;
  review_id: number;
  imageUrl: string;
  rootUrl: string = environment.apiUrl;

  constructor(
    private reviewService: ReviewService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) {
    this.activatedRoute.params.subscribe(
      params => (this.id = params.review_id)
    );
  }


  ngOnInit() {
    this.getReview();
    console.log('review_id', this.id);
    this.imageUrl = this.rootUrl + 'image/' + this.id + '/?type=review';
  }



  getReview() {
    this.reviewService.getReview(this.id).subscribe((data: any) => {
      this.review = data.review;
      this.review_id = data.review.id;
      console.log(this.review);
    });
  }

  showComments() {
    this.showComment = true;

  }

  hideComments() {
    this.showComment = false;

  }

  postLike() {
    this.reviewService.postLike(2, this.review_id).subscribe(() => {
      console.log('liked');
    });

  }

  back() {
    this._location.back();
  }

}
