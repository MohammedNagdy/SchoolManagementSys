import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private as: AuthService) { }

  ngOnInit() {
    // this.as.getItem().subscribe(item => {
    //   console.log(item);
    // });
  }

  

}
