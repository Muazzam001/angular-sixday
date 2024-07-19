import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { SharedModule } from './shared/shared.module';
import { PlaceholderImgComponent } from './components/placeholder-img/placeholder-img.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderImgComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //
    HomeModule,
    ReservationModule
  ],
  exports: [
    PlaceholderImgComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
