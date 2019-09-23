import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsumerCatalougeService } from '../consumer-catalouge.service';
import { ConsumerCatalogue } from '../consumercatalogue';

@Component({
  selector: 'app-item-searched',
  templateUrl: './item-searched.component.html',
  styleUrls: ['./item-searched.component.css']
})
export class ItemSearchedComponent implements OnInit {
  sub: any;
  OrderItemId: any;
item: ConsumerCatalogue[];
  units: number;

  constructor(private activateRoute: ActivatedRoute, private consumer: ConsumerCatalougeService) {
   }

  ngOnInit() {

    this.sub = this.activateRoute.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.OrderItemId = params['itemselected'];
      console.log(this.OrderItemId);
    });

    this.consumer.getItemIdById(this.OrderItemId)
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
      this.consumer.placeOrderRequest('consumer1', CatalogueId , this.units, durationInMonths).subscribe( (data) => {
        console.log(data);
      });

    }
  }

