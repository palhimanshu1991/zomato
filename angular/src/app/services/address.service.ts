import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  userAddressRoutes = '/useraddress';
  stateRoutes = '/states';
  districtRoutes = '/districts';
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

  getUserAddress() {
    return this.apiService.get(this.userAddressRoutes);
  }

  showUserAddress(id) {
    this.userAddressShow =  this.userAddressRoutes + '/' + id;
    return this.apiService.get(this.userAddressShow);
  }

  editUserAddress(data: any, id: any) {
    this.userAddressShow =  this.userAddressRoutes + '/' + id;
    return this.apiService.put(this.userAddressShow, data);
  }
}
