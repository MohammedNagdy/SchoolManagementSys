import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { ModuleWithProviders } from "@angular/core";

const providers = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule{}

@NgModule({})
export class StudentAppModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers,
    }
  }
};
