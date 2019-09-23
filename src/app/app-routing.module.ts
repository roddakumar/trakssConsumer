import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { OrderComponent } from './order/order.component';
import { ItemSearchedComponent } from './item-searched/item-searched.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'Electronics' , component: ElectronicsComponent},
{path: 'Appliances' , component: AppliancesComponent},
{path: 'Furniture' , component: FurnitureComponent},
{path: 'Books' , component: BooksComponent},
{path: 'searchresult/:find' , component: SearchComponent},
{path: 'searchresult', component: SearchComponent},
{path: 'order', component: OrderComponent},
{path: 'order/:item' , component: OrderComponent},
{path: 'itemselected/:itemselected' , component: ItemSearchedComponent},
{path: 'profile', component: ProfileComponent},
{path: '', redirectTo: '/home', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
