import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  userAddressRoutes = '/user/address';
  stateRoutes = '/states';
  districtRoutes = '/district';
  constructor(private apiService: ApiService) { }

  getStates() {
    return this.apiService.get(this.stateRoutes);
  }

  getDistricts() {
    return this.apiService.get(this.stateRoutes);
  }

  addUserAddress(data: any) {
    return this.apiService.post(this.userAddressRoutes, data);
  }
}
