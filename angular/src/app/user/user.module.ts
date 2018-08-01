import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from '../services/add-header.interceptor';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { AddAddressComponent } from './add-address/add-address.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, AddAddressComponent],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    ProfileService
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
