import { Component, Input } from '@angular/core';
import { Contact } from 'src/models/contact';
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {

  @Input() contact!: Contact;

  }

