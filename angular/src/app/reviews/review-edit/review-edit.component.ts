import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
import { ReviewService } from '../../services/review.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
  reviewForm: FormGroup;
  reviews: any;
  review_id: any;
  restaurant_id: number;
  review: string;
  rating: any;
  data: any;

  constructor(
    private reviewService: ReviewService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _location: Location,
    private fb: FormBuilder
  ) {
    this.activatedRoute.params.subscribe(
      params => (this.review_id = params.review_id)
    );
    this.activatedRoute.params.subscribe(
      params => (this.restaurant_id = params.id)
    );
  }

  // route fix: reviews/{id}/edit

  ngOnInit() {
    this.buildForm();
    this.getReviews();

  }

  buildForm() {
    this.reviewForm = this.fb.group({
      rating: [''],
      text: ['']
    });
  }

  getReviews() {
    this.reviewService.getReview(this.review_id).subscribe((data: any) => {
      this.reviews = data.review;
      console.log(this.reviews);
    });
  }

  onSubmit() {
    this.reviewService
      .postReview(this.reviewForm.value, this.restaurant_id)
      .subscribe(() => {
        console.log('review updated');
        this.router.navigateByUrl('restaurants/' + this.restaurant_id + '/reviews');
      });




  }

}
