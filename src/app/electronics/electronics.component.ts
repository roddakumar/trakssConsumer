import { Component, OnInit } from '@angular/core';
import {  ConsumerCatalougeService} from '../consumer-catalouge.service';

import { ConsumerCatalogue } from '../consumercatalogue';
import { Reseller } from '../reseller';
import { CatalougeItem } from '../catalougeItems';
import { Router } from '@angular/router';
import { Catalouge } from '../catalouge';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
find: string;
data1: ConsumerCatalogue[];
dataCatalougeItem: CatalougeItem;
dataResellerItem: Reseller;
units: number;
quantities: number[];

  constructor(private consumerService: ConsumerCatalougeService, private route: Router) { }

  ngOnInit() {
    this.find = 'Electronics';
    this.consumerService.getCatalougeByCatagory(this.find)
  .subscribe(
    data => {
      console.log(data);
      this.data1 = data;
      console.log(this.data1.length);
     },
    error => { this.data1 = error.status; },
  );
  }
  gotoorder(item: number) {

    console.log(item);
    this.route.navigate(['order', item]);

  }


}
