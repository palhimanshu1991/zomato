import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login' , pathMatch:'full'},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'home',canActivate:[AuthGuard], component: HomeComponent}
  {path: 'restaurants', component: RestaurantListComponent },
  {path : '**', component: PageNotFoundComponent}
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)

=======
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login' , pathMatch:'full'},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},

  {path:'home',canActivate:[AuthGuard], component: HomeComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
>>>>>>> origin/nisit
  ],
  declarations: []
})
export class AppRoutingModule { }
