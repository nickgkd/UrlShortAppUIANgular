import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScreenOneComponent } from './screen_one/screen_one.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { UrlShortenerService } from './screen_one/screen_one.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ScreenOneComponent
  ],
  imports: [
HttpClientModule,
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule
  ],
  providers: [
    UrlShortenerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
