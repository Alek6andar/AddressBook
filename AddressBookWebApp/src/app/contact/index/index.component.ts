import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
       
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
       
  contacts: Contact[] = [];
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public contactService: ContactService) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.contactService.getAll().subscribe((data: Contact[])=>{
      this.contacts = data;
      console.log(this.contacts);
    })  
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteContact(id:string){
    this.contactService.delete(id).subscribe(res => {
         this.contacts = this.contacts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
     
}