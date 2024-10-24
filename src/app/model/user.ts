import { Property } from "./property";

export class User {
    id : number;
    name: string;
    email: string;
    password: string;
    role: string;
    properties: Property[];
    // rentalRequests property missed
}