import { Component, Input } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Contact } from 'src/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  contacts!: Contact[];
  searchTerm: string = '';

  constructor(private ListService: ListServiceService) { }

  ngOnInit() {
  this.contacts = this.ListService.getContacts();
  }
  searchContacts() {
    this.contacts = this.ListService.getContacts().filter(contact => {
      // Recherche insensible à la casse sur les champs firstName, lastName, email et phone
      return (
        contact.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        contact.phone.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }}
