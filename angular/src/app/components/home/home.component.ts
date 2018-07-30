import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/Restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image: boolean = false;
  restaurants: Restaurant[];


  constructor() { }

  ngOnInit() {
    this.restaurants = [
      {
        id: 1,
        name: 'kfc'
      },
      {
        id: 2,
        name: 'McDonalds'
      }
    ];
  }


}
