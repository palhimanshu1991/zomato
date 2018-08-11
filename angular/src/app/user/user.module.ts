import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAddressEditComponent } from './user-address-edit/user-address-edit.component';
import { UserAddressCreateComponent } from './user-address-create/user-address-create';
import { UserAddressListComponent } from './user-address-list/user-address-list.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, UserAddressCreateComponent, UserAddressListComponent, UserAddressEditComponent],

  providers: [
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
