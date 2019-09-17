import { Component, OnInit } from '@angular/core';
import { ConsumerCatalougeService} from '../consumer-catalouge.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
find: string ;
data1: any[];
  constructor(private consumerService: ConsumerCatalougeService ) { }

  ngOnInit() {

  }
search() {
  this.consumerService.getCatalouge(this.find)
  .subscribe(
    data => this.data1 = data,
    error => { this.data1 = error.status; }

  ); 
}
}
