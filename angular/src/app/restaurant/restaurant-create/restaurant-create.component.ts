import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {RestaurantService} from '../../services/restaurant.service';
import {ImageUploadService} from '../../services/image-upload.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ApiService} from "../../services/api.service";
import {AddressService} from "../../services/address.service";
import {CategoryService} from "../../services/category.service";
import {CuisineService} from "../../services/cuisine.service";


@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css'],

})

export class RestaurantCreateComponent implements OnInit {

  restaurant: any;
  states: any;
  districts: any;
  categories: any;
  cuisines: any;
  imageSelected: boolean;

  formData = new FormData();

  restaurantCreateForm = this.fb.group({
    name: ['fg ', Validators.required],
    category_id: ['1', Validators.required],
    cuisine_id: ['1', Validators.required],
    address: this.fb.group({
      street: ['bnm', Validators.required],
      locality: ['nbm', Validators.required],
      landmark: ['bnm', Validators.required],
      pincode: ['123456', Validators.required],
      state_id: ['1', Validators.required],
      district_id: ['1', Validators.required],
    }),
  });

  constructor(private fb: FormBuilder,
              private service: RestaurantService,
              private imageService: ImageUploadService,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private el: ElementRef,
              private http: HttpClient,
              private apiService: ApiService,
              private addressService: AddressService,
              private categoryService: CategoryService,
              private cuisineService: CuisineService
  ) {
  }

  ngOnInit() {
    this.imageSelected = false;

    this.addressService.getStates().subscribe((response) => {
      this.states = response;
    });

    this.addressService.getDistricts().subscribe((response) => {
      this.districts = response;
    });

    this.categoryService.list().subscribe((response) => {

      this.categories = response;

    });

    this.cuisineService.list().subscribe((response) => {

      this.cuisines = response;

    });

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

    this.service.submitForm(this.restaurantCreateForm.value).subscribe(response => {


      console.log(response);
      this.restaurant = response;
      console.log(this.restaurant.id);
      if (this.imageSelected) {
        const url = environment.apiUrl + 'image-upload/' + this.restaurant.id + '?type=restaurant';

        this.http.post(url, this.formData).subscribe(response => {
          this.route.navigate(['restaurants/' + this.restaurant.id]);
        });
      }

      this.route.navigate(['restaurants/' + this.restaurant.id]);

    });

  }


}
