import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewAddComponent } from './review-add/review-add.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { AddCommentComponent } from '../shared/add-comment/add-comment.component';


const routes: Routes = [
  {path: '', component: ReviewsComponent},
  {path: 'add', component: ReviewAddComponent},
  {path: 'edit/:review_id', component: ReviewEditComponent},
  {path: ':review_id/comment', component: AddCommentComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ReviewRoutingModule { }
