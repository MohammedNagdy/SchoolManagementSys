import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";

// import the other applications to main one
import { StudentAppModule } from "../../projects/student/src/app/app.module";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavbarComponent,
    RegisterComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'sms'),
    StudentAppModule.forRoot(),

    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  exports: [HomeComponent, SigninComponent, RegisterComponent]
})
export class AppModule { }
