import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReviewService } from '../../services/review.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../models/Review';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent implements OnInit {
  reviewForm: FormGroup;
  review: any;
  id: number;
  data: Review;

  constructor(private fb: FormBuilder, private reviewService: ReviewService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(params => this.id = params.id );

     }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.reviewForm = new FormGroup({
      rating: new FormControl(''),
      text: new FormControl(''),
    });
  }

  onSubmit() {

    this.reviewService.postReview(this.reviewForm.value, this.id).subscribe(() => {
        console.log('review posted');
    });

    this.reviewService.postRating(this.reviewForm.value, this.id).subscribe(() => {
      console.log('review posted');
  });

  }

}
