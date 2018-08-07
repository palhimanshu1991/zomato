import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {RestaurantService} from '../../services/restaurant.service';
import {ImageUploadService} from '../../services/image-upload.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css'],

})

export class RestaurantCreateComponent implements OnInit {

  restaurant: any;
  public uploader: FileUploader = new FileUploader({url: ''});
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
              private http: HttpClient
  ) {
  }

  ngOnInit() {
  }

  onFileChange(name) {
    const element: HTMLInputElement = this.el.nativeElement.querySelector('#fileupload');

    const file = element.files.item(0);
    console.log(file);
    const type = 'restaurant';
    this.formData.append(name, file);

  }

  onSubmit() {

    this.service.submitForm(this.restaurantCreateForm.value).subscribe( response => {


      console.log(response);
      this.restaurant = response;
      console.log(this.restaurant.id);
      const url = environment.apiUrl + 'image-upload/' + this.restaurant.id + '?type=restaurant';

      this.http.post(url, this.formData).subscribe( response => {
        this.route.navigate(['restaurants/' + this.restaurant.id]);
      });

    });

  }


}
