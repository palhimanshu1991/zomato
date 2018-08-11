import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  userAddressRoutes = 'useraddress';
  stateRoutes = 'states';
  districtRoutes = 'districts';
  userAddressShow: string;
  constructor(private apiService: ApiService) { }

  getStates() {
    return this.apiService.get(this.stateRoutes);
  }

  getDistricts() {
    return this.apiService.get(this.districtRoutes);
  }


  addUserAddress(data: any) {
    return this.apiService.post(this.userAddressRoutes, data);
  }

  // getAddress
  getUserAddress() {
    return this.apiService.get(this.userAddressRoutes);
  }
// show
  showUserAddress(userAddressid) {
    this.userAddressShow =  this.userAddressRoutes + '/' + userAddressid;
    return this.apiService.get(this.userAddressShow);
  }

  editUserAddress(data: any, userAddressid: number) {
    this.userAddressShow =  this.userAddressRoutes + '/' + userAddressid;
    return this.apiService.put(this.userAddressShow, data);
  }
}
