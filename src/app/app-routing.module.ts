import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"acceuil", pathMatch:'full'},
  {path:"acceuil", component: HomeComponent},
  {path: "user", loadChildren: ()=>import('./features/users/users.module').then((m)=>m.UsersModule)},
  {path: "property", loadChildren: ()=>import('./features/properties/properties.module').then((m)=>m.PropertiesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
