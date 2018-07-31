import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isError: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('',
        Validators.required
      ),
      email: new FormControl('',
        Validators.required
      ),
      password: new FormControl('',
        Validators.required
      ),
      c_password: new FormControl('',
        Validators.required
      )
    });
  }

  OnSubmit() {
    this.isError = false;
    this.userService.registerUser(this.registerForm.value).subscribe((data: any) => {
      localStorage.setItem('userToken', data.success.token);
      localStorage.setItem('userInfo', JSON.stringify(data.success.user));
      this.router.navigate(['/home']);
    },
      (err: HttpErrorResponse) => {
        this.isError = true;
        const data = err.error.error;
        Object.keys(data).forEach((fieldName) => {
          this.registerForm.controls[fieldName].setErrors({ backend: data[fieldName] });
        });
      });
  }

}
