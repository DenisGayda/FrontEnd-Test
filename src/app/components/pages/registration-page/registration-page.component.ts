import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  registrationForm: FormGroup;
  
  ngOnInit() {
    this.registrationForm = new FormGroup({
      login: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  submitUserData() {
    
  }
}
