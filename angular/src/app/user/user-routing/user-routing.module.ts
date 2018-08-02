import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { AddAddressComponent } from '../add-address/add-address.component';
import { UserAddressComponent } from '../user-address/user-address.component';
import { UserAddressEditComponent } from '../user-address-edit/user-address-edit.component';

const routes: Routes = [
  {path: '' , children: [
    {path: '', component: ProfileComponent},
    {path: 'address', component: AddAddressComponent},
    {path: 'useraddress', component: UserAddressComponent},
    {path: 'useraddress/:id', component: UserAddressEditComponent}
  ]}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class UserRoutingModule { }
