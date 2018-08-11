import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { UserAddressEditComponent } from '../user-address-edit/user-address-edit.component';
import { UserAddressCreateComponent } from '../user-address-create/user-address-create';
import { UserAddressListComponent } from '../user-address-list/user-address-list.component';

const routes: Routes = [
  {path: '' , children: [
    {path: '', component: ProfileComponent},
    {path: 'address/create', component: UserAddressCreateComponent},
    {path: 'address', component: UserAddressListComponent},
    {path: 'address/:id', component: UserAddressEditComponent}
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
