import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RestaurantModule } from './restaurant/restaurant.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
//import { NavbarComponent } from './components/navbar/navbar.component';
//import { RestComponent } from './rest/rest.component';
//import { AppRoutingModule } from './/app-routing.module';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RestComponent,
   RestaurantListComponent,
   FooterComponent,
   PageNotFoundComponent,
    RestaurantsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
