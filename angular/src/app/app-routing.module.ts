import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { UserModule } from './user/user.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RestaurantListComponent} from './restaurant/restaurant-list/restaurant-list.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthGuard} from './auth/auth.guard';
import {RestaurantCreateComponent} from "./restaurant/restaurant-create/restaurant-create.component";
import {RestaurantShowComponent} from "./restaurant/restaurant-show/restaurant-show.component";
import {CuisineCreateComponent} from "./cuisine/cuisine-create/cuisine-create.component";
import {CuisineListComponent} from "./cuisine/cuisine-list/cuisine-list.component";
import {CategoryCreateComponent} from "./category/category-create/category-create.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'restaurants', canActivate: [AuthGuard], component: RestaurantListComponent},
  {path: 'restaurants/create', component: RestaurantCreateComponent},
  {path: 'restaurant/:id', component: RestaurantShowComponent},
  {path: 'cuisines/create', component: CuisineCreateComponent},
  {path: 'cuisines', component: CuisineListComponent},
  {path : 'categories', component : CategoryListComponent},
  {path : 'categories/create', component : CategoryCreateComponent},
  {path: '**', component: PageNotFoundComponent}
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restaurants', canActivate: [AuthGuard], component: LayoutComponent, loadChildren: () => RestaurantModule },

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
    loadChildren: () => UserModule,
  },

];
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
