import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RestaurantRoutingModule } from './restaurant-routing/restaurant-routing.module';
import { RestaurantShowComponent } from './restaurant-show/restaurant-show.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RestaurantRoutingModule
  ],
  declarations: [
    RestaurantListComponent,
    RestaurantCreateComponent,
    RestaurantShowComponent
  ],
  exports : [
    RestaurantListComponent,
    RestaurantCreateComponent
  ],
  providers : [
    RestaurantService
  ]
})
export class RestaurantModule {  }
