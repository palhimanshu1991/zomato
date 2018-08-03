import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {RestaurantService} from "../services/restaurant.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['' , Validators.required],
      phone: ['',  Validators.required]
    })
  });

  constructor(private fb: FormBuilder,private service:RestaurantService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.submitForm(this.userForm.value);
    console.warn(this.userForm.value);
  }
}
