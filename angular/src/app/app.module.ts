import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantModule } from './restaurant/restaurant.module';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AddHeaderInterceptor } from './services/add-header.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    RestaurantListComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RestaurantModule,
    UserModule
  ],
  providers: [
    UserService,
    AuthGuard,
],

  bootstrap: [AppComponent]
})
export class AppModule { }
