import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RestaurantRoutingModule } from './restaurant-routing/restaurant-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RestaurantRoutingModule
  ],
  declarations: [
    RestaurantListComponent,
    RestaurantCreateComponent
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
