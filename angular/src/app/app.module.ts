import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { FooterComponent } from './shared/footer/footer.component';
import { RestaurantModule } from './restaurant/restaurant.module';
import { LayoutComponent } from './shared/layout/layout.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {ApiService} from './services/api.service';
import { CuisineCreateComponent } from './cuisine/cuisine-create/cuisine-create.component';
import { CuisineListComponent } from './cuisine/cuisine-list/cuisine-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryListComponent } from './category/category-list/category-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    LayoutComponent,
    CuisineCreateComponent,
    CuisineListComponent,
    CategoryCreateComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RestaurantModule,
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
