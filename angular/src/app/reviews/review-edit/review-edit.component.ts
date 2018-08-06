import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl
} from '../../../../node_modules/@angular/forms';
import { ReviewService } from '../../services/review.service';
import {
  ActivatedRoute,
  Router
} from '../../../../node_modules/@angular/router';
import { Location } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
  reviewForm: FormGroup;
  reviews: any;
  id: any;
  restaurant_id: number;
  review: string;
  rating: any;
  data: any;

  constructor(
    private reviewService: ReviewService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) {
    this.activatedRoute.params.subscribe(
      params => (this.id = params.review_id)
    );
    this.activatedRoute.params.subscribe(
      params => (this.restaurant_id = params.id)
    );
  }

  // route fix: reviews/{id}/edit

  ngOnInit() {
    this.getReviews();
    this.buildForm();
  }

  buildForm() {
    this.reviewForm = new FormGroup({
      rating: new FormControl(''),
      text: new FormControl('')
    });
  }

  getReviews() {
    this.reviewService.getReview(this.id).subscribe((data: any) => {
      this.reviews = data.review;
      console.log(this.reviews);
    });
  }

  onSubmit() {
    this.reviewService
      .postReview(this.reviewForm.value, this.restaurant_id)
      .subscribe(() => {
        console.log('review updated');
      });

    this.reviewService
      .postRating(this.reviewForm.value, this.restaurant_id)
      .subscribe(() => {
        console.log('rating updated');
      });

      this._location.back();

  }

}
