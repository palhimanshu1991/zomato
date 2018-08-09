import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReviewAddComponent } from './review-add/review-add.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { AddCommentComponent } from '../shared/add-comment/add-comment.component';
import { ReviewShowComponent } from './review-show/review-show.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';


const routes: Routes = [
  {path: '', component: ReviewsListComponent},
  {path: 'add', component: ReviewAddComponent},
  {path: ':review_id/edit', component: ReviewEditComponent},
  {path: ':review_id/comment', component: AddCommentComponent},
  {path: ':review_id', component: ReviewShowComponent}
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
