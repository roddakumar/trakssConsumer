import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalougeItem } from '../app/catalougeItems';
import { Observable } from 'rxjs';
import { ConsumerCatalogue } from './consumercatalogue';
import { state } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class ConsumerCatalougeService {
url: string ;
  searchCatlouge: any;
  constructor(private http: HttpClient ) {
this.url = 'http://172.23.234.56:5001/api/ConsumerCatalogue/category';
   }

   getCatalougeByCatagory( searchCatlouge: string): Observable<ConsumerCatalogue[]> {
     console.log('in catageroy');
     return this.http.get<ConsumerCatalogue[]>(this.url + '/' + searchCatlouge);

   }

   getCatalougeBySubCatagory( searchCatlouge: any): Observable<ConsumerCatalogue[]> {
    console.log('in subcatageroy');
    return this.http.get<ConsumerCatalogue[]>('http://172.23.234.56:5001/api/ConsumerCatalogue/subcategory' + '/' + searchCatlouge);
       }


       getCatalougeByTitle( searchCatlouge: string): Observable<ConsumerCatalogue[]> {
        console.log('in title');
       // tslint:disable-next-line: align
       return this.http.get<ConsumerCatalogue[]>('http://172.23.234.56:5001/api/ConsumerCatalogue/title' + '/' + searchCatlouge);
           }


           getItemIdById( searchCatlouge: number): Observable<ConsumerCatalogue[]> {
           // tslint:disable-next-line: align
           return this.http.get<ConsumerCatalogue[]>('http://172.23.234.56:5001/api/ConsumerCatalogue/id' + '/' + searchCatlouge);
               }

               placeOrderRequest(consumerId: string, catalogueId: string, totalNumberOfUnits: number, durationInMonths: number ) {

                         console.log(consumerId, catalogueId, totalNumberOfUnits, durationInMonths + 'in service');
                         // tslint:disable-next-line:max-line-length
                         return this.http.post('http://localhost:5000/api/orderrequest', {consumerId, catalogueId, totalNumberOfUnits, durationInMonths});


               }
               // tslint:disable-next-line:ban-types
               // tslint:disable-next-line:max-line-length
               updateProfile
               (FirstName: string, LastName: string, Email: string, Address: string, PhoneNumber: number, ZipCode: number, City: string,State: string,Location: string)
               {
      console.log(FirstName) ;
      console.log(LastName);
      console.log(PhoneNumber);
      console.log(Email);
      console.log(Address);
      console.log(City);
      console.log(ZipCode)
     return this.http.post('http://localhost:5000/api/consumerprofile',{
     email:Email,
     FirstName:FirstName,
     LastName:LastName,
     MobileNumber:PhoneNumber,
     address: Address,
     city:City,
     Zipcode:ZipCode,
     state:State,
     Location:Location
   });
   }
}
