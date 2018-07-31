import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck {


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  ngDoCheck() {

  }

  logout(){
    this.userService.logout();
    console.log('User logged out');
    this.router.navigate[('/')]
  }

}
