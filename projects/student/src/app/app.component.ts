import { Component } from '@angular/core';
import { AuthService } from "../../../../src/app/auth.service";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student';

  constructor(private auth : AuthService, private router: Router ){

  }

  ngOnInit(){

  }

  onLogOut(){
    this.auth.logout().then(() => {
        this.router.navigateByUrl("/");
    })
  }
}
