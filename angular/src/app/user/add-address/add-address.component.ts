import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AddressService } from "../../services/address.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-address",
  templateUrl: "./add-address.component.html",
  styleUrls: ["./add-address.component.css"]
})

// rename this to UserAddressCreateComponent.
export class AddAddressComponent implements OnInit {
  addressForm: FormGroup;
  states: any[];
  districts: any[];
  data: any[];

  constructor(
    private addressService: AddressService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.getStates();
    this.getDistricts();
    this.buildForm();
  }

  buildForm() {
    this.addressForm = this.fb.group({
      title: ["", Validators.required],
      street: ["", Validators.required],
      locality: ["", Validators.required],
      landmark: ["", Validators.required],
      pincode: ["", Validators.required],
      state_id: [1, Validators.required],
      district_id: [1, Validators.required]
    });
  }

  getStates() {
    this.addressService.getStates().subscribe((data: any) => {
      this.states = data.state;
      console.log(this.states);
    });
  }

  getDistricts() {
    this.addressService.getDistricts().subscribe((data: any) => {
      this.districts = data.district;
      console.log(this.districts);
    });
  }

  onSubmit() {
    this.data = this.addressForm.value;
    console.log(this.data);
    this.addressService.addUserAddress(this.data).subscribe(() => {
      console.log(12);
      this.router.navigate(['/profile']);
    });
  }
}
