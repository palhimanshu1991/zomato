import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  restaurants = [
    'ekta kitchen', 
    'nisit foods',
    'haldirams',
    'btw',
    'nathus sweet',
  ];
  constructor() { }

  ngOnInit() {
  }

}
