import { Injectable } from "@angular/core";
import { Property } from "src/app/model/property";
import { User } from "src/app/model/user";

@Injectable({
    providedIn: "root",
})
export class DataSource {
    listUsers: User[] = [
        {
          id: 1,
          name: 'Alice Johnson',
          email: 'alice@example.com',
          password: 'hashed_password_123',
          role: 'owner',
          properties: [] // To be populated later with references to properties.
        },
        {
          id: 2,
          name: 'Bob Smith',
          email: 'bob@example.com',
          password: 'hashed_password_456',
          role: 'owner',
          properties: []
        },
        {
          id: 3,
          name: 'Charlie Davis',
          email: 'charlie@example.com',
          password: 'hashed_password_789',
          role: 'owner',
          properties: []
        }
      ];
    
    listProperties: Property[] = [
        {
          id: 1,
          title: 'Luxury Apartment in Downtown',
          description: 'A beautiful 3-bedroom apartment located in the heart of the city with modern amenities.',
          price: 150000.0,
          address: '123 Main St, Downtown, City A',
          surface: 120.5,
          type: 'Apartment',
          publicationDate: new Date('2024-01-15'),
          owner: this.listUsers[0] // Alice Johnson
        },
        {
          id: 2,
          title: 'Cozy Cottage in the Countryside',
          description: 'A charming 2-bedroom cottage with a large garden and serene surroundings.',
          price: 90000.0,
          address: '456 Country Road, Village B',
          surface: 85.0,
          type: 'Cottage',
          publicationDate: new Date('2024-02-01'),
          owner: this.listUsers[1] // Bob Smith
        },
        {
          id: 3,
          title: 'Modern Office Space',
          description: 'Spacious office space in a business district, perfect for startups and small businesses.',
          price: 250000.0,
          address: '789 Business Ave, City C',
          surface: 200.0,
          type: 'Office',
          publicationDate: new Date('2024-03-05'),
          owner: this.listUsers[2] // Charlie Davis
        }
      ];
    
    ngOnInit(){
        this.listUsers[0].properties = [this.listProperties[0]]; // Alice Johnson owns the Luxury Apartment.
        this.listUsers[1].properties = [this.listProperties[1]]; // Bob Smith owns the Cozy Cottage.
        this.listUsers[2].properties = [this.listProperties[2]]; // Charlie Davis owns the Modern Office Space.

    }
      
    
}