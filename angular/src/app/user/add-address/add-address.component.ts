import { Component, OnInit } from '@angular/core';
import { FormGroup } from '../../../../node_modules/@angular/forms';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  addressForm: FormGroup;
  states: any;
  districts: any;

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.getStates();
  }

  getStates() {
    this.addressService.getStates().subscribe((data: any) => {

      this.states = data.state;
      console.log(this.states);

    });
  }

}
