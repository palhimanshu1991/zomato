import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-comments',
  templateUrl: './show-comments.component.html',
  styleUrls: ['./show-comments.component.css']
})
export class ShowCommentsComponent implements OnInit {
  @Input() comment: any;

  constructor() { }

  ngOnInit() {
  }

}
