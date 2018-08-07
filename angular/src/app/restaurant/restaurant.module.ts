import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RestaurantShowComponent } from './restaurant-show/restaurant-show.component';
import {RouterModule} from "@angular/router";
import {FileUploadModule} from "ng2-file-upload";
import {  RestaurantService} from '../services/restaurant.service';
import {ImageUploadService} from '../services/image-upload.service';
import { RestaurantUpdateComponent } from './restaurant-update/restaurant-update.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FileUploadModule
  ],
  declarations: [
    RestaurantListComponent,
    RestaurantCreateComponent,
    RestaurantShowComponent,
    RestaurantUpdateComponent
  ],
  exports : [
    RestaurantListComponent,
    RestaurantCreateComponent,
    RestaurantShowComponent,
    RestaurantUpdateComponent
  ],
  providers : [
    RestaurantService,
    ImageUploadService,
  ]
})
export class RestaurantModule {  }
