import { Component, OnInit} from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from "../auth.service";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  useClass: boolean = false;

  constructor(public router: Router, private fb : FormBuilder, private auth: AuthService) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      Email:"",
      Password:"",
      Confirm_Password: ""
    })
    this.myForm.valueChanges.subscribe((obj) => {
      if(obj.Password != obj.Confirm_Password){
        this.useClass = true;
        console.log("wrong");
      }
      else if (obj.Password == obj.Confirm_Password){
          this.useClass = false;
          console.log("that's right");
      }
    })

  }

  onSubmit(){
    //   this.auth.createuser(email.value, password1.value).then((data) => {
    //     console.log(data);
    //
    //     if (data.isAnonymous){
    //         console.log(data);
    //         this.router.navigateByUrl("/student");
    //       }
    //     else{
    //       this.alert("Something went wrong...try again!");
    //     }
    //   })
    }

}
