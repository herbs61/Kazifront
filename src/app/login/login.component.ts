import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',Validators.required),
  });

  // constructor() {
  //   this.loginForm.valueChanges.subscribe((value: any) => {
  //     console.log(value);
  //   });
  // }

  login(){
    if (this.loginForm.invalid) return;

  alert('Calling backend  to login')
  }
}
