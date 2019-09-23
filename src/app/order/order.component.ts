import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalougeItem } from '../catalougeItems';
import { Catalouge } from '../catalouge';
import { ConsumerCatalougeService } from '../consumer-catalouge.service';
import { ConsumerCatalogue } from '../consumercatalogue';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
units: number;
  OrderItemId: number;
  private sub: any;
  item: ConsumerCatalogue[];
  constructor(private activateRoute: ActivatedRoute, private consumerService: ConsumerCatalougeService) { }

  ngOnInit() {
    this.sub = this.activateRoute.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.OrderItemId = params['item'];
      console.log(this.OrderItemId);
    });

    this.consumerService.getItemIdById(this.OrderItemId)
      .subscribe(
        data => {
          console.log(data);
          this.item = data;
         },
        error => {
          console.log(error);
        },
      );
    }
    totalAmount(price: number) {
      return price * this.units;
    }
    gotoorderrequest(CatalogueId: string, durationInMonths: number) {

      // tslint:disable-next-line:max-line-length
      this.consumerService.placeOrderRequest('consumer1', CatalogueId , this.units, durationInMonths).subscribe( (data) => {
        console.log(data);
      });
      this.formSearch(this.OrderItemId);
    }


formSearch(itemId: number) {

  this.consumerService.getItemIdById(itemId)
  .subscribe(
    data => {
      console.log(data);
      this.item = data;
     },
    error => {
      console.log(error);
    },
  );

}
}
