import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { AddAddressComponent } from '../add-address/add-address.component';

const routes: Routes = [
  {path: '' , children: [
    {path: '', component: ProfileComponent},
    {path: 'address', component: AddAddressComponent}
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
