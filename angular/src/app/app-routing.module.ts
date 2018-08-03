import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserModule } from './user/user.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RestaurantModule } from './restaurant/restaurant.module';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restaurants', canActivate: [AuthGuard], component: LayoutComponent, loadChildren: () => RestaurantModule },

  {
    path: 'home', canActivate: [AuthGuard], component: LayoutComponent,
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
