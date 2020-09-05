import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;


  constructor( private fb : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Email:"",
      Password:"",
    })
    console.log("Hi You're in The Login Page!!!")
  }

}
