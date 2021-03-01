import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) {


  }

  errorMessage: string = '';

  registerForm: any = new FormGroup({

    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(80)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9]{3,10}$')]),


  });



  submitForm(registerForm: any) {


    if (registerForm.valid) {
      this._AuthService.register(registerForm.value).subscribe((response) => {

        if (response.message === 'success') {
          this._Router.navigate(['/login'])
        }
        else {
          this.errorMessage = response.message;
        }
      })
    }


  }

  ngOnInit(): void {
  }

}
