import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';
import { RestaurantCreateComponent } from '../restaurant-create/restaurant-create.component';
import { RestaurantShowComponent } from '../restaurant-show/restaurant-show.component';
import { ReviewsModule } from '../../reviews/reviews.module';

const routes: Routes = [
  {path: '', component: RestaurantListComponent },
  {path: 'add', component: RestaurantCreateComponent},
  {path: ':id', component: RestaurantShowComponent},
  {path: ':id/reviews', loadChildren: () => ReviewsModule },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],

})
export class RestaurantRoutingModule { }
