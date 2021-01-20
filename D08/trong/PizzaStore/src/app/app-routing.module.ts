import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/pizza-main/pizza-main.module').then(m => m.PizzaMainModule) },
  { path: 'cart', loadChildren: () => import('./pages/pizza-main/component/cart/cart.module').then(m => m.CartModule) },
  { path: 'list', loadChildren: () => import('./item-list/item-list.module').then(m => m.ItemListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
