import { Component, OnInit } from '@angular/core';
import {GoogleService} from '../google.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
  data: any = [];
  constructor(private googleService : GoogleService) { }

  ngOnInit() {
    this.googleService.getGooglePosts().subscribe(data =>{
      this.data = data;
      console.log("this.data", this.data);
    });
  }

}
