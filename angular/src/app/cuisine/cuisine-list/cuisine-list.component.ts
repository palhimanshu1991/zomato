import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CuisineService} from "../../services/cuisine.service";

@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrls: ['./cuisine-list.component.css']
})
export class CuisineListComponent implements OnInit {

  cuisines : string;

  constructor(private fb: FormBuilder,
              private cuisineService: CuisineService,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.getCuisines();
  }

  getCuisines() {
    this.cuisineService.list().subscribe(response => {
    this.cuisines = response;
    });
  }


}
