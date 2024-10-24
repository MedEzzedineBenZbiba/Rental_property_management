import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/model/property';
import { DataSource } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent {
  id : any;
  propertyById : Property;
  constructor(private dataService: DataSource, private activateRoute : ActivatedRoute){}
  
  ngOnInit(){
    this.activateRoute.params.subscribe((params)=> {this.id = params['id'];
      for(let property of this.dataService.listProperties){
        if(property.id == this.id)
          this.propertyById = property;
      }
    })
    
  }
}