import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticatedStatusService } from '../helper/authenticated-status.service'
import { Router } from '@angular/router';
import { LogInService } from './login.service';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
    private logInForm: FormGroup
    private message: string
    private success: boolean = true;

    constructor(
        private router: Router,
        private logInService: LogInService,
        private formBuilder:FormBuilder,
        private authenticatedStatusService:AuthenticatedStatusService,
    ) {
        this.logInForm = this.formBuilder.group({
            'email': [null, Validators.required],
            'password': [null, Validators.compose([Validators.required])]
        })
    }

    ngOnInit() {

    }

    authenticateUser(user) {
        this.logInService.logIn(user)
        .subscribe(response =>{
            if(response.success){
              this.authenticatedStatusService.changeStatus(true)
                localStorage.setItem('authToken',JSON.stringify(response.token))
                const user = {
                    'email':response.user.email,
                    'id':response.user.id
                }
                localStorage.setItem('user',JSON.stringify(user));
                this.router.navigate(['home'])
            } else {
              this.success = false
              this.message = response.msg
            }
        })
    }
}
