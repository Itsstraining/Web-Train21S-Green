import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/excel/excel.module').then((m) => m.ExcelModule),
  },
];
=======
const routes: Routes = [];
>>>>>>> cd9f6317852391dc9416625ec2353a4b4c4627b7

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
