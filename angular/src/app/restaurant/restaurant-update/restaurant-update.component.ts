import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RestaurantService} from "../../services/restaurant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ImageUploadService} from "../../services/image-upload.service";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-restaurant-update',
  templateUrl: './restaurant-update.component.html',
  styleUrls: ['./restaurant-update.component.css']
})
export class RestaurantUpdateComponent implements OnInit {

  restaurant: any;
  id: number;
  states: any;
  districts: any;
  categories: any;
  cuisines: any;
  imageSelected: boolean;

  formData = new FormData();

  restaurantUpdateForm = this.fb.group({
    name: ['', Validators.required],
    category_id: ['', Validators.required],
    cuisine_id: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      locality: ['', Validators.required],
      landmark: ['', Validators.required],
      pincode: ['', Validators.required],
      state_id: ['', Validators.required],
      district_id: ['', Validators.required],
    }),
  });

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
    this.imageSelected = false;
    this.patchForm(this.id);
    this.showStates();
    this.showDistricts();
    this.showCategories();
    this.showCuisines();

  }


  onFileChange(name) {
    this.imageSelected = true;
    var element: HTMLInputElement = this.el.nativeElement.querySelector('#fileupload');

    var file = element.files.item(0);
    console.log(file);
    var type = "restaurant";
    this.formData.append(name, file);

  }

  onSubmit() {

    this.service.updateForm(this.restaurantUpdateForm.value, this.id).subscribe(response => {


      console.log(response);
      this.restaurant = response;
      console.log(this.restaurant);
      if (this.imageSelected) {
        const url = environment.apiUrl + 'image-upload/' + this.restaurant.id + '?type=restaurant';

        this.http.post(url, this.formData).subscribe(response => {
          console.log(response);
          this.route.navigate(['restaurants/' + this.restaurant.id]);
        });
      }

      this.route.navigate(['restaurants/' + this.restaurant.id]);

    });

  }

  patchForm(id: number) {

    this.service.find(id).subscribe((response: any) => {
      this.restaurant = response;
      console.log(this.restaurant);
      this.restaurantUpdateForm.patchValue(this.restaurant);

    });

  }

  showStates() {
    this.apiService.get('states').subscribe(response => {

      this.states = response.states;
    });
  }

  showDistricts() {
    this.apiService.get('districts').subscribe(response => {

      this.districts = response.districts;

    });
  }

  showCategories() {
    this.apiService.get('categories').subscribe(response => {

      this.categories = response;

    });
  }

  showCuisines() {
    this.apiService.get('cuisines').subscribe(response => {

      this.cuisines = response;

    });
  }

}

