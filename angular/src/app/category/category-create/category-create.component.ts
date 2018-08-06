import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  categoryCreateForm = this.fb.group({
    name: ['fg ', Validators.required],
  });


  constructor(private fb: FormBuilder,
              private categoryService: CategoryService,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.categoryService.create(this.categoryCreateForm.value).subscribe(response => {
      console.log(response);
      this.route.navigate(['/categories']);
    });
  }
}
