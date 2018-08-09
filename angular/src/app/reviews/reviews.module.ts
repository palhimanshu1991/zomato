import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ReviewRoutingModule } from './review-routing.module';
import { ReviewAddComponent } from './review-add/review-add.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { AddCommentComponent } from '../shared/add-comment/add-comment.component';
import { ReviewShowComponent } from './review-show/review-show.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ShowCommentsComponent } from '../shared/show-comments/show-comments.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReviewRoutingModule,
  ],
  declarations: [
    ReviewsListComponent,
    ReviewAddComponent,
    ReviewEditComponent,
    AddCommentComponent,
    ReviewShowComponent,
    ShowCommentsComponent
  ]
})

// ReviewModule
export class ReviewsModule { }
