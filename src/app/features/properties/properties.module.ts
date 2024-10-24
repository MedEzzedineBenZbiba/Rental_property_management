import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PropertyDetailComponent,
    PropertyListComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    FormsModule
  ]
})
export class PropertiesModule { }
