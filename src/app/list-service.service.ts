import { Injectable } from '@angular/core';
import { Contact } from 'src/models/contact';


@Injectable({
  providedIn: 'root'
})


export class ListServiceService {


  contacts: Contact[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '0123456789',photo:'', type: 'client' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', phone: '0123456789', photo:'',type: 'client' },
    { id: 3, firstName: 'Bob', lastName: 'Smith', email: 'bob.smith@example.com', phone: '0123456789', photo:'', type: 'client' },
    { id: 4, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', phone: '0123456789', photo:'', type: 'client' },
    { id: 5, firstName: 'Peter', lastName: 'Parker', email: 'peter.parker@example.com', phone: '0123456789',photo:'', type: 'client' },
    { id: 6, firstName: 'John', lastName: 'Smith', email: 'john.smith@example.com', phone: '0123456789',photo:'', type: 'fournisseur' },
    { id: 7, firstName: 'Mary', lastName: 'Johnson', email: 'mary.johnson@example.com', phone: '0123456789', photo:'', type: 'fournisseur' },
    { id: 8, firstName: 'David', lastName: 'Lee', email: 'david.lee@example.com', phone: '0123456789', photo:'', type: 'fournisseur' },
    { id: 9, firstName: 'Karen', lastName: 'Wong', email: 'karen.wong@example.com', phone: '0123456789', photo:'', type: 'fournisseur' },
    { id: 10, firstName: 'Tom', lastName: 'Hanks', email: 'tom.hanks@example.com', phone: '0123456789',photo:'', type: 'fournisseur' }
  ];


  getContacts(): Contact[] {
    return this.contacts;
  }


}
