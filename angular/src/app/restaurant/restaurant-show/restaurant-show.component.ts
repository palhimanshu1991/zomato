import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-restaurant-show',
  templateUrl: './restaurant-show.component.html',
  styleUrls: ['./restaurant-show.component.css']
})
export class RestaurantShowComponent implements OnInit {

  restaurant: any;
  id: number;

  constructor(private restaurantService: RestaurantService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.showRestaurant();
  }

  showRestaurant() {
    this.restaurantService.find(this.id).subscribe((response: any) => {
     this.restaurant = response;

    });
  }

}
