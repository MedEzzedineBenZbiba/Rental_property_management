import { Component } from '@angular/core';
import { Property } from 'src/app/model/property';
import { DataSource } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  recentProperties : Property[] = [];
  constructor(private dataService: DataSource){
  }
  
  ngOnInit(){

    for (let i = this.dataService.listProperties.length -1 ; i >= this.dataService.listProperties.length - 2  ; i--) {
      this.recentProperties.push(this.dataService.listProperties[i])
    }
    console.log(this.dataService.listProperties);
    console.log(this.recentProperties)
  }
}
