import { Component, OnInit } from '@angular/core';
import { Catalouge } from '../catalouge';
import { Router } from '@angular/router';
import { ConsumerCatalougeService } from '../consumer-catalouge.service';
import { CatalougeItem } from '../catalougeItems';
import { ConsumerCatalogue } from '../consumercatalogue';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
users: string[];
data1: ConsumerCatalogue[];
catalouge: Catalouge[] = [
  // tslint:disable-next-line:max-line-length
  {catlougeType: 'Electronics', catalougeImage: '../assets/images/electronics.jpg', catalougeDescription: 'Mobiles & Accessories Laptops & Accessories TV & Home Entertainment Audio Cameras Computer Peripherals Smart Technology Musical Instruments Office & Stationery. ... At Amazon India, you will be able to find a wide selection of electronics from top brands.'},
  // tslint:disable-next-line:max-line-length
  {catlougeType: 'Appliances', catalougeImage: '../assets/images/appliences.jpg', catalougeDescription: 'Shop for Home Appliances on EMI ✓ All Branded Home Appliances like Air ... Bajaj Finserv, India"s leading non-banking finance company, brings you EMI offers ...'},
  // tslint:disable-next-line:max-line-length
  {catlougeType: 'Furniture', catalougeImage: '../assets/images/furniture.jpg', catalougeDescription: 'Sofa Sets. ... Buy furniture online @ Pepperfry - India"s largest home shopping destination offering a wide range of home and office furniture online. ... Pepperfry.com is the best place to buy metal as well as wooden furniture online in India.'},
  // tslint:disable-next-line:max-line-length
  {catlougeType: 'Books', catalougeImage: '../assets/images/books.jpg', catalougeDescription: 'Huge Range & High Quality. Interest Free EMIs. Free Delivery & Assembly. In Fabric,Wooden,Leather. 500,000+ Products Shipped. Up to 5 Year Warranty. High Quality Furniture. 3-Year Warranty on Sofas. Best Quality & Service.'},
];
  constructor(private router: Router, private consumerService: ConsumerCatalougeService) { }

  ngOnInit() {

  }

  goToCatalouge(type: string) {
    console.log(type);
    this.consumerService.getCatalougeByCatagory(type)
      .subscribe(
        data => {
          console.log(data);
          this.data1 = data;
         },
        error => { this.data1 = error.status; },
      );
    this.router.navigate([`/${type}`]);
  }


}
