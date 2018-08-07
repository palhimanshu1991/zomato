import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from '../services/add-header.interceptor';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserAddressEditComponent } from './user-address-edit/user-address-edit.component';
import { UserAddressCreateComponent } from './user-address-create/add-address.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, UserAddressCreateComponent, UserAddressComponent, UserAddressEditComponent],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    ProfileService
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
