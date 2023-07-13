import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { FormGroup, FormControl, Validators} from '@angular/forms';
      
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
       
  id!: number;
  contact!: Contact;
  form!: FormGroup;
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public contactService: ContactService,
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

    this.contactService.find(this.id.toString()).subscribe((data: Contact)=>{
      this.contact = data;
    }); 
       
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10)])
    });
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    this.form.value.id = this.id.toString();
    console.log(this.form.value);
    this.contactService.update(this.id.toString(), this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('contact/index');
    })
  }
    
}