import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Restaurant} from '../../shared/models/Restaurant';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-restaurant-show',
  templateUrl: './restaurant-show.component.html',
  styleUrls: ['./restaurant-show.component.css']
})
export class RestaurantShowComponent implements OnInit {

  restaurant: Restaurant;
  id: number;
  loaded: boolean = false;
  imageUrl: any;
  isImageLoading: boolean;
  imageToShow: string;
  rootUrl: string = environment.apiUrl;

  constructor(private restaurantService: RestaurantService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.showRestaurant();
    this.imageUrl = this.rootUrl + 'image/' + this.id + '/?type=restaurant';
  }

  showRestaurant() {
    this.restaurantService.find(this.id).subscribe((response: any) => {
     this.restaurant = response;
      console.log(this.restaurant);
    });
  }

  // getImageFromService(route: string) {
  //   this.isImageLoading = true;
  //   this.restaurantService.getImage(route).subscribe(data => {
  //     this.createImageFromBlob(data);
  //     this.isImageLoading = false;
  //   }, error => {
  //     this.isImageLoading = false;
  //     console.log(error);
  //   });
  // }
  //
  // createImageFromBlob(image: Blob) {
  //   let reader = new FileReader();
  //   reader.addEventListener("load", () => {
  //     this.imageToShow = reader.result;
  //   }, false);
  //
  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  // }

}
