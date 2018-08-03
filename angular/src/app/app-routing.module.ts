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


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'restaurants', canActivate: [AuthGuard], component: RestaurantListComponent},
  {path: 'form', component: RestaurantCreateComponent},
  {path: 'restaurant/:id', component: RestaurantShowComponent},
  {path: '**', component: PageNotFoundComponent}

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
