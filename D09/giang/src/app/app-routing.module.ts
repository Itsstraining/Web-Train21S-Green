import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'ruou', loadChildren: () => import('./pages/ruou/ruou.module').then(m => m.RuouModule) },
{ path: 'listruou', loadChildren: () => import('../app/list-ruou/list-ruou.module').then(m => m.ListRuouModule) },
{ path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
