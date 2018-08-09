import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CuisineCreateComponent} from './cuisine-create/cuisine-create.component';
import {CuisineService} from '../services/cuisine.service'
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { CuisineListComponent } from './cuisine-list/cuisine-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],

  declarations: [
    CuisineCreateComponent,
    CuisineListComponent
  ],

  exports: [
    CuisineCreateComponent,
    CuisineListComponent
  ],

  providers: [
    CuisineService
  ]
})
export class CuisineModule {
}
