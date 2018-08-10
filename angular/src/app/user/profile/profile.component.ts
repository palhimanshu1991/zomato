import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  data: any;

  profileForm: FormGroup;

  constructor(private userService: ProfileService, private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.details();
  }

  buildForm() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      c_password: ['', Validators.required]
    });
  }

  details() {
    this.userService.userDetails().subscribe((data: any) => {
      this.user = data.success.user;
      this.profileForm.patchValue(this.user);
    });
  }

  onSubmit() {
    this.data = this.profileForm.value;
    this.userService.updateDetails(this.data).subscribe(() => {
      console.log('updated');
      window.location.reload();
    });
  }
}
