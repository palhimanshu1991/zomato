import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RestaurantModule} from './restaurant/restaurant.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HttpClientModule} from '../../node_modules/@angular/common/http';
import {AuthGuard} from './auth/auth.guard';
import {FooterComponent} from './components/footer/footer.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ApiService} from './services/api.service';
import {FileUploadModule} from 'ng2-file-upload';
import {CuisineModule} from "./cuisine/cuisine.module";
import {CategoryModule} from "./category/category.module";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RestaurantModule,
    FileUploadModule,
    CuisineModule,
    CategoryModule
  ],
  providers: [
    UserService,
    AuthGuard,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
