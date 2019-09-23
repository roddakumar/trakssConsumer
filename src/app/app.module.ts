import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ItemSearchedComponent } from './item-searched/item-searched.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './search/search.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SlideComponent,
    HeaderComponent,
    HomeComponent,
    ItemSearchedComponent,
    ElectronicsComponent,
    FurnitureComponent,
    AppliancesComponent,
    BooksComponent,
    SearchComponent,
    OrderComponent,
    ProfileComponent,
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
  providers: [ItemSearchedComponent, OrderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
