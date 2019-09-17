import { Component, OnInit } from '@angular/core';
import { Catalouge } from '../models/catalouge';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
users: string[];
catalouge: Catalouge[] = [
  {catlougeType: 'Electronics', catalougeImage: '../assets/images/electronics.jpg',catalougeDescription:'Mobiles & Accessories Laptops & Accessories TV & Home Entertainment Audio Cameras Computer Peripherals Smart Technology Musical Instruments Office & Stationery. ... At Amazon India, you will be able to find a wide selection of electronics from top brands.'},
  {catlougeType: 'Fashion', catalougeImage: '../assets/images/fashion.jpg',catalougeDescription:'Leather Sandals. Emma Spedding. White Jeans. Shot from the Street. Trench Coat. Style Stalker. Breton Top. Brittany Bathgate. Black Dress. Jeanette Madsen. Ray-Ban Sunglasses. Lisa Aiken. Leather Biker Jacket. Natasha Ndlovu.'},
  {catlougeType: 'Books', catalougeImage: '../assets/images/furniture.jpg',catalougeDescription:'Books Advanced Search New Releases & Pre-orders Best Sellers Browse Genres Children"s & Young Adult Textbooks Exam Central All Indian Languages. ... Browse through variety of genres such as Fiction, Classics, Children"s Books, School Textbooks, and much more. Explore Amazon Best Reads ...'},
  {catlougeType: 'Furniture', catalougeImage: '../assets/images/books.jpg',catalougeDescription:'Sofa Sets. ... Buy furniture online @ Pepperfry - India"s largest home shopping destination offering a wide range of home and office furniture online. ... Pepperfry.com is the best place to buy metal as well as wooden furniture online in India.'},
];
  constructor() { }

  ngOnInit() {

  }


}
