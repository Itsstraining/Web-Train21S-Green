import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/pizza-main/pizza-main.module').then(m => m.PizzaMainModule) },
  { path: 'cart', loadChildren: () => import('./pages/pizza-main/component/cart/cart.module').then(m => m.CartModule) },
  { path: 'list2', loadChildren: () => import('./pages/list-item/list-item.module').then(m => m.ListItemModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
