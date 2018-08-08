import {Component, ElementRef, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {HttpClient} from "@angular/common/http";
import {ImageUploadService} from "../../services/image-upload.service";
import {FormBuilder} from "@angular/forms";
import {RestaurantService} from "../../services/restaurant.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-delete',
  templateUrl: './restaurant-delete.component.html',
  styleUrls: ['./restaurant-delete.component.css']
})
export class RestaurantDeleteComponent implements OnInit {

  id: number;

  constructor(private fb: FormBuilder,
              private service: RestaurantService,
              private imageService: ImageUploadService,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private el: ElementRef,
              private http: HttpClient,
              private apiService: ApiService
  ) {

    this.activatedRoute.params.subscribe(params => this.id = params.id);

  }


  ngOnInit() {
    this.service.delete(this.id).subscribe();
  }


}
