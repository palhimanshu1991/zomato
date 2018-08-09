import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-user-address-list',
  templateUrl: './user-address-list.component.html',
  styleUrls: ['./user-address-list.component.css']
})
// user address list
export class UserAddressListComponent implements OnInit {
  addresses: any;

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.getAddress();
  }

  getAddress() {
    this.addressService.getUserAddress().subscribe((data: any) => {
      this.addresses = data.address;
      console.log(this.addresses);
    });
  }

}
