import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewAddComponent } from './review-add/review-add.component';

const routes: Routes = [
  {path: '', component: ReviewsComponent},
  {path: 'add', component: ReviewAddComponent}
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
