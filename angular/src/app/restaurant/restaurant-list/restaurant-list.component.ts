import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import { RestaurantService } from "../../services/restaurant.service";

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: any;

  constructor(private restaurantService: RestaurantService, private router: Router,private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.restaurantList().subscribe((response: any) => {
      this.restaurants = response;
    }


  )}

  }
