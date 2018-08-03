import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewRoutingModule } from './review-routing.module';
import { ReviewAddComponent } from './review-add/review-add.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReviewRoutingModule
  ],
  declarations: [
    ReviewsComponent,
    ReviewAddComponent,
  ]
})
export class ReviewsModule { }
