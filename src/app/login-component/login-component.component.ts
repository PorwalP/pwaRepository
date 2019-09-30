import { Component, OnInit } from '@angular/core';
// import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts'
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  public allContact: any;
  constructor() {

  }

  ngOnInit() {
    // let contact: Contact = this.contacts.create();
  }

}
