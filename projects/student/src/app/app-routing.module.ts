import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { FirstStepComponent } from './first-step/first-step.component';
import { AuthGuard } from "../../../../src/app/auth.guard";


const routes: Routes = [
  {path:"student", component: AppComponent, canActivate: [AuthGuard]},
  {path:"step1", component: FirstStepComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
