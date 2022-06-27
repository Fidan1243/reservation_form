import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateResComponent } from './create-res/create-res.component';
import { ReservationsComponent } from './reservations/reservations.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CreateResComponent,
    ReservationsComponent
  ],
  imports: [BrowserModule, FormsModule,HttpClientModule, AppRoutingModule,ReactiveFormsModule], // modules

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
