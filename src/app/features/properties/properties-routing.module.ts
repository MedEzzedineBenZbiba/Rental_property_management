import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailComponent } from 'src/app/features/properties/property-detail/property-detail.component';

const routes: Routes = [
  {path: "", component:PropertyListComponent, children:[
    {path: "details/:id", component: PropertyDetailComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
