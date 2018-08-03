import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewRoutingModule } from './review-routing.module';
import { ReviewAddComponent } from './review-add/review-add.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { AppModule } from '../app.module';
import { AddCommentComponent } from '../shared/add-comment/add-comment.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReviewRoutingModule,
  ],
  declarations: [
    ReviewsComponent,
    ReviewAddComponent,
    ReviewEditComponent,
    AddCommentComponent
  ]
})

// ReviewModule
export class ReviewsModule { }
