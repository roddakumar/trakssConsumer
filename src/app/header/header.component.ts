import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConsumerCatalougeService} from '../consumer-catalouge.service';
import { CatalougeItem } from '../catalougeItems';
import { SearchComponent} from '../search/search.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public item = new EventEmitter();

find: string ;
data1: CatalougeItem[];
States: string[] = ['Hyderbad', 'chennai', 'bangalore'];


  // tslint:disable-next-line:no-shadowed-variable
  constructor(private consumerService: ConsumerCatalougeService , private router: Router) { }

  ngOnInit() {
// tslint:disable-next-line:no-string-literal
// tslint:disable-next-line:no-unused-expression
  }
  getCatalouge(find: string) {
  console.log(this.find);
  this.router.navigate(['/searchresult', find]);
}
goToProfile() {
  this.router.navigate(['/profile']);
}










}
