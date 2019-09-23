import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerCatalougeService } from '../consumer-catalouge.service';
import { CatalougeItem } from '../catalougeItems';
import { Reseller } from '../reseller';
import { ConsumerCatalogue } from '../consumercatalogue';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itemselected: number;
  find: string;
  final: string;
  sub: any;
  catalogues: ConsumerCatalogue[];
  isOrderSelected: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private route: Router, private router: ActivatedRoute , private consumerService: ConsumerCatalougeService, private orderrequest: OrderComponent) {
    this.sub = this.router.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.find = params['find'];
      console.log(this.find);
    });


    this.final = this.find.toLowerCase();
    this.final = this.final.replace(/^./, this.find[0].toUpperCase());


  // GetCategory
    this.consumerService.getCatalougeByCatagory(this.final).
  subscribe(data => {
    if (data.length > 0) {
      console.log(data);
      this.catalogues = data;
    }
   });

 // GetSubCategory
    this.consumerService.getCatalougeBySubCatagory(this.final).
 subscribe(data => {
   if (data.length > 0) {
    console.log(data);
    this.catalogues = data;
    console.log(this.catalogues );
    }
  });

  // GetTitle
    this.consumerService.getCatalougeByTitle(this.find).
 subscribe(data => {
   if (data.length > 0) {
    console.log(data.length);
    this.catalogues = data;

    }
  });
  }

  ngOnInit() {
  }


  gotoorder(itemId: number) {
     console.log(itemId + 'hello');
    // this.orderrequest.formSearch(itemId);
    // this.isOrderSelected = true;
     this.itemselected = itemId;
     this.route.navigate(['/itemselected', this.itemselected]);


  }

}
