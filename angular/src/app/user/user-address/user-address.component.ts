import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
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
