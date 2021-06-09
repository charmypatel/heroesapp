import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here, needed in order to use form controls

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';  // new component created was added here
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule //needed for the input box
  ], 
  declarations: [
    AppComponent,
    DashboardComponent,  // new component created was added here
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }