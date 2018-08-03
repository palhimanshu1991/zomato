import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {RestaurantService} from "../../services/restaurant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {

  restaurant: any;

  RestaurantCreateForm = this.fb.group({
    name: ['', Validators.required],
    category_id: ['' , Validators.required],
    cuisine_id: ['' , Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      locality: ['', Validators.required],
      landmark: ['', Validators.required],
      pincode: ['', Validators.required],
      state_id: ['', Validators.required],
      district_id: ['' , Validators.required]
    }),
  });

  constructor(private fb: FormBuilder,private service:RestaurantService,private route: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.submitForm(this.RestaurantCreateForm.value).subscribe(response=>{
      this.restaurant = response;
    });

    console.log(this.restaurant.id);

     this.route.navigate(['/restaurants']);

  }
}
