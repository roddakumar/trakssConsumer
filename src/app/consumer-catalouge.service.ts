import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalougeItem } from '../app/catalougeItems';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsumerCatalougeService {
url: string ;
  constructor(private http: HttpClient) {
this.url = 'http://0.0.0.0:5001/api/catalogue';
   }
   getCatalouge( searchCatlouge: string): Observable<CatalougeItem[]> {
console.log(searchCatlouge);
return this.http.get<CatalougeItem[]>('http://localhost:5001/api/catalogue');

   }

}
