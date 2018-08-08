import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReviewService } from '../../services/review.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../models/Review';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent implements OnInit {
  reviewForm: FormGroup;
  review: any;
  id: number;
  data: Review;
  imageSelected = false;
  review_id;

  formData = new FormData();

  constructor(private fb: FormBuilder, private reviewService: ReviewService,
    private activatedRoute: ActivatedRoute, private el: ElementRef) {
      this.activatedRoute.params.subscribe(params => this.id = params.id );

     }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.reviewForm = new FormGroup({
      rating: new FormControl(''),
      text: new FormControl(''),
    });
     // difference between formbuilder and formgroup
  }

  onFileChange(name) {
    this.imageSelected = true;
    const element: HTMLInputElement = this.el.nativeElement.querySelector('#fileupload');

    const file = element.files.item(0);
    console.log(file);
    this.formData.append(name, file);

  }

  onSubmit() {

    this.reviewService.postReview(this.reviewForm.value, this.id).subscribe((data: any) => {
        console.log('review posted');
        this.review_id = data.id;
        console.log(this.formData.get);
        if (this.imageSelected) {

          this.reviewService.addImage(this.formData, this.review_id).subscribe(() => {

            console.log('image uploaded');

          });


        }
    });





  }

}
