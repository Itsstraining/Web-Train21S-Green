import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cart', loadChildren: () => import('../app/components/cart/cart.module').then(m => m.CartModule) },
  { path: 'itemList', loadChildren: () => import('./components/item-list/item-list/item-list.module').then(m => m.ItemListModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
