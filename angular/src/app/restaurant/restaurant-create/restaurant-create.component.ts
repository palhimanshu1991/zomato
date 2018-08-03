import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {RestaurantService} from "../../services/restaurant.service";
import {ImageUploadService} from "../../services/image-upload.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FileUploader} from 'ng2-file-upload';
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";


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
    image: [''],
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
    var element: HTMLInputElement = this.el.nativeElement.querySelector('#fileupload');

    var file=element.files.item(0);console.log(file);
    this.formData.append(name, element.files.item(0));
    console.log(this.formData);

  }

  onSubmit() {

    this.service.submitForm(this.restaurantCreateForm.value).subscribe(response => {

      console.log(response);
      this.restaurant = response;
      console.log(this.restaurant.id);

      this.http.post('restaurants/images/' + this.restaurant.id, this.formData, this.restaurant.id).subscribe(response => {
      });

      this.route.navigate(['/restaurant/' + this.restaurant.id]);
    });

  }


}

//   onFileChange(event) {
//     const reader = new FileReader();
//
//     if (event.target.files && event.target.files.length) {
//       const [file] = event.target.files;
//       console.log(file);
//       reader.readAsDataURL(file);
//
//       reader.onload = () => {
//         this.restaurantCreateForm.patchValue({
//           image: reader.result
//         });
//
//         //this.cd.markForCheck();
//       };
//     }
//   }
// }
