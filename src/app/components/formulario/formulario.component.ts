import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { Contact } from 'src/app/interface/contact';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor( private router: Router) {}

  ngOnInit(): void {
  }

  model = new Contact();
  submitted = false;
  error!: {};
  result = '';
 

 

  
  gotoHome() {
    this.router.navigate(['/']);
  }

  onSubmit(form:NgForm) {
   
    this.submitted = true;

  
   
       swal.fire('Contact Us', 'Your email was sent successfully', 'success');
    
   
    this.gotoHome();
  }

}
