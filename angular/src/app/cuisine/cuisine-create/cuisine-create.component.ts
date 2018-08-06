import {Component , OnInit} from '@angular/core';
import {CuisineService} from "../../services/cuisine.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cuisine-create',
  templateUrl: './cuisine-create.component.html',
  styleUrls: ['./cuisine-create.component.css']
})
export class CuisineCreateComponent implements OnInit {



  cuisineCreateForm = this.fb.group({
    name: ['fg ', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private cuisineService: CuisineService,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.cuisineService.create(this.cuisineCreateForm.value).subscribe(response => {
      console.log(response);
      this.route.navigate(['/cuisines/']);
    });
  }

}
