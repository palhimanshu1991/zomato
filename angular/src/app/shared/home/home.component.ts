import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getImage();
    console.log(this.image);

  }

  getImage() {
    this.apiService.getImage().subscribe((data: any) => {
      this.image = 'http://instafoods.test' + data.url;
    });
  }

}
