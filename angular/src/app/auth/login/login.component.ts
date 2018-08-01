import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = true;
  loginError = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',
        Validators.required
      ),
      password: new FormControl('',
        Validators.required),
    });
  }

  onSubmit() {
    this.loading = true;
    this.loginError = false;
    this.userService.userAuthentication(this.loginForm.value.email, this.loginForm.value.password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.success.token);
      localStorage.setItem('userInfo', JSON.stringify(data.success.user));
      this.router.navigate(['/home']);
    }, (err: HttpErrorResponse) => {
      this.loading = false;
      this.loginError = true;
      const data = err.error.error;
      Object.keys(data).forEach((fieldName) => {
        this.loginForm.controls[fieldName].setErrors({ backend: data[fieldName] });
      });
    });
  }

}
