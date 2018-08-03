import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any;
  id: number;

  constructor(private reviewService: ReviewService, private activatedRoute: ActivatedRoute) {
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

}
