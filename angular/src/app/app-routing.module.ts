import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path: 'restaurant-list', component: RestaurantListComponent },
  {path : '**', component: PageNotFoundComponent}
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
 
  ],
  declarations: []
})
export class AppRoutingModule { }
