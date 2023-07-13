import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
     
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
      
  id!: number;
  contact!: Contact;
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public ContactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['contactId'];
    console.log("route params:", this.route.snapshot.params)
    this.ContactService.find(this.id.toString()).subscribe((data: Contact)=>{
      this.contact = data;
    });
  }
     
}