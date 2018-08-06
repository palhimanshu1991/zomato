import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {CategoryService} from '../services/category.service'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],

  declarations: [

    CategoryCreateComponent,
    CategoryListComponent
  ],

  exports: [
    CategoryCreateComponent,
    CategoryListComponent
  ],

  providers: [
    CategoryService
  ]
})
export class CategoryModule {
}
