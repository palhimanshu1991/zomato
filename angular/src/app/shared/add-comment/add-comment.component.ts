import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { ReviewService } from '../../services/review.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})

// move it to Comment Module or Shared Module
export class AddCommentComponent implements OnInit {
  commentForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private reviewService: ReviewService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(
      params => (this.id = params.review_id)
    );
   }

  ngOnInit() {
    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.reviewService.postComment(this.commentForm.value, this.id).subscribe(() => {
      console.log('commented');
    });
  }

}
