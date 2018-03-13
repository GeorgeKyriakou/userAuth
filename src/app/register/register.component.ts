import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

import { User } from '../models/User.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  private message: any ={
    display:false,
    success:false,
    text:''
  };
  private userRegisterForm:FormGroup;
  private email: string;
  private password: string;

  constructor( private formBuilder:FormBuilder,
    private registerService:RegisterService,
    private router: Router
  ) {
    this.userRegisterForm = this.formBuilder.group({
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required,Validators.minLength(5)])]
    })
  }

  register(newUser) {
    this.registerService.registerNewUser(newUser)
    .subscribe(resp => {
      if (resp.registered){
        this.message.display = true;
        this.message.text = 'You have been registered succesfully, you can now log in to your account'
        this.message.success = true
      } else {
        this.message.display = true
        this.message.text = 'Something went wrong, please try again.'
        this.message.success = false
        console.log(resp)
      }
    })
  }
}
