import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RestaurantListComponent} from './restaurant/restaurant-list/restaurant-list.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthGuard} from './auth/auth.guard';
import {CuisineCreateComponent} from './cuisine/cuisine-create/cuisine-create.component';
import {CuisineListComponent} from './cuisine/cuisine-list/cuisine-list.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {LayoutComponent} from './shared/layout/layout.component';
import {RestaurantModule} from './restaurant/restaurant.module';
import {UserModule} from './user/user.module';
import {HomeComponent} from './shared/home/home.component';



const routes: Routes = [


  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'restaurants',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    loadChildren: () => RestaurantModule
  },

  {
    path: 'home',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [{ path: '', component: HomeComponent }]
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    loadChildren: () => UserModule
  },
  { path: 'cuisines/create', component: CuisineCreateComponent },
  {
    path: 'cuisines',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      { path: '', component: CuisineListComponent },
      { path: 'create', component: CuisineCreateComponent }
    ]
  },
  {
    path: 'categories',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      { path: '', component: CategoryListComponent },
      { path: 'create', component: CategoryCreateComponent }
    ]
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule {
}
