import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/model/property';
import { DataSource } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  searchValue: string = '';
  propertyList: Property[] = [];
  filterPropertyList: Property[] = [];

  constructor(private dataService: DataSource) {}

  ngOnInit() {
    this.propertyList = this.dataService.listProperties;
    this.filterPropertyList = this.propertyList;
  }

  onSearchChange() {
    this.filterPropertyList = [];

    if (this.searchValue.trim() !== '') {
      const lowerSearchValue = this.searchValue.toLowerCase();

      for (let property of this.propertyList) {
        if (
          property.title.toLowerCase().includes(lowerSearchValue) ||
          property.address.toLowerCase().includes(lowerSearchValue) ||
          property.description.toLowerCase().includes(lowerSearchValue) ||
          property.price.toString().includes(lowerSearchValue) ||
          property.surface.toString().includes(lowerSearchValue)
        ) {
          this.filterPropertyList.push(property);
        }
      }
    } else {
      this.filterPropertyList = this.propertyList;
    }
  }
}
