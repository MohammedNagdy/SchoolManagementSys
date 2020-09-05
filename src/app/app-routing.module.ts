import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";
import { RegisterComponent } from "./register/register.component";

import { StudentAppModule } from "../../projects/student/src/app/app.module";


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "signin", component: SigninComponent},
  {path: "register", component: RegisterComponent},
  // {path: "student",
  // loadChildren:
  //   "../../projects/student/src/app/app.module#StudentAppModule"
//}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
