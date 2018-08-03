import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.reviewService.getReviews().subscribe((data: any) => {
      this.reviews = data;

    });
  }

}
