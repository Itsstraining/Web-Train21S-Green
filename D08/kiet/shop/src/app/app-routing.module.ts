import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cart', loadChildren: () => import('.//components/cart/cart.module').then(m => m.CartModule) },
  { path: 'itemList', loadChildren: () => import('./components/item-list/item-list/item-list.module').then(m => m.ItemListModule) },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }
, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
