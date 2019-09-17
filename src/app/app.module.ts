import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
// tslint:disable-next-line:import-spacing

// tslint:disable-next-line:max-line-length
import {MatToolbarModule,
   MatInputModule,
   MatOptionModule,
  MatIconModule,
  MatSelectModule,
   MatCardModule, MatButtonModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import { CardsComponent } from './cards/cards.component';
import { SlideComponent } from './slide/slide.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
// import {MatCarouselSlideComponent} from '@NgModule/material-carousel';
// import {MatCarouselSlide} from '@NgModule/material-carousel';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SlideComponent,
    SearchComponent,
    HeaderComponent,
    // MatCarouselSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
     MatButtonModule,
    MatMenuModule,
    MDBBootstrapModule,
    MatInputModule, MatOptionModule, MatSelectModule, MatIconModule,
    MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
