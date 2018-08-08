import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';
import { RestaurantCreateComponent } from '../restaurant-create/restaurant-create.component';
import { RestaurantShowComponent } from '../restaurant-show/restaurant-show.component';
import { RestaurantUpdateComponent } from '../restaurant-update/restaurant-update.component';
import { ReviewsModule } from '../../reviews/reviews.module';
import {RestaurantDeleteComponent} from "../restaurant-delete/restaurant-delete.component";

const routes: Routes = [
  {path: '', component: RestaurantListComponent },
  {path: 'create', component: RestaurantCreateComponent},
  {path: ':id', component: RestaurantShowComponent},
  {path: ':id/update', component: RestaurantUpdateComponent},
  {path: ':id/reviews', loadChildren: () => ReviewsModule },
  {path: ':id/delete', component: RestaurantDeleteComponent}

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
