import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
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
=======
const routes: Routes = [{ path: 'signup', component: SignupComponent },
{ path: 'login', component:LoginComponent },

];
>>>>>>> 8f1a0d017f881195f794da8b7c1b58b52a5c4bfc

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
