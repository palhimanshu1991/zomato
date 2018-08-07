import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AddressService } from "../../services/address.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-user-address-edit",
  templateUrl: "./user-address-edit.component.html",
  styleUrls: ["./user-address-edit.component.css"]
})
export class UserAddressEditComponent implements OnInit {
  address: any;
  addressForm: FormGroup;
  id: number; // user id or address id.
  states: any;
  districts: any;
  data: any;
  title: string;

  constructor(
    private addressService: AddressService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.activatedRoute.params.subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    this.getUserAddress();
    this.getDistricts();
    this.getStates();
    this.buildForm();
    this.addressForm.patchValue(this.address);
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

  getUserAddress() {
    this.addressService.showUserAddress(this.id).subscribe((data: any) => {
      this.address = data.address;
      this.title = data.title;
      console.log(this.address);
      this.addressForm.patchValue(this.address);
    });
  }

  buildForm() {
    this.addressForm = this.fb.group({
      title: [""],
      street: [""],
      locality: [""],
      landmark: [""],
      pincode: [""],
      state_id: [""],
      district_id: [""]
    });
  }

  onSubmit() {
    this.data = this.addressForm.value;
    console.log(this.data);
    this.addressService.editUserAddress(this.data, this.id).subscribe(() => {
      console.log(12);
      this.router.navigate(["/profile"]);
    });
  }
}
