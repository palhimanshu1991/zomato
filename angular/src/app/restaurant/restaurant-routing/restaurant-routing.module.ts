import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';
import { RestaurantCreateComponent } from '../restaurant-create/restaurant-create.component';

const routes: Routes = [
  {path: '', component: RestaurantListComponent },
  {path: 'add', component: RestaurantCreateComponent}
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
