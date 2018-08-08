import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RestaurantRoutingModule } from './restaurant-routing/restaurant-routing.module';
import { RestaurantShowComponent } from './restaurant-show/restaurant-show.component';
import {RouterModule} from '@angular/router';
import {FileUploadModule} from 'ng2-file-upload';
import {ImageUploadService} from '../services/image-upload.service';
import { RestaurantUpdateComponent } from './restaurant-update/restaurant-update.component';
import { RestaurantDeleteComponent } from './restaurant-delete/restaurant-delete.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RestaurantRoutingModule,
    FileUploadModule
  ],
  declarations: [
    RestaurantListComponent,
    RestaurantCreateComponent,
    RestaurantShowComponent,
    RestaurantUpdateComponent,
    RestaurantDeleteComponent
  ],
  exports : [
    RestaurantListComponent,
    RestaurantCreateComponent,
    RestaurantShowComponent,
    RestaurantUpdateComponent,
    RestaurantDeleteComponent
  ],
  providers : [
    RestaurantService,
    ImageUploadService
  ]
})
export class RestaurantModule {  }
