import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { RestaurantService } from "../../services/restaurant.service";

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants = [
    'ekta kitchen',
    'nisit foods',
    'haldirams',
    'btw',
    'nathus sweet'
  ];

  constructor(private restaurantService: RestaurantService, private router: Router) {

  }

  ngOnInit() {
  }

  onClick() {
    this.restaurantService.restaurantList().subscribe((response: any) => {
      console.log(response);
      //this.router.navigate(['/restaurant-check']);
    }


  )}

  }