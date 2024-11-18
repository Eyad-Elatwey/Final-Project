import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  loginForm = new FormGroup({
    email: new FormControl("eyadelatwey@gmail.com" , [Validators.required ,Validators.email , Validators.minLength(15)]),
    password : new FormControl(null, [Validators.required , Validators.pattern("^[A-Za-z]+$")])
  })

  isSubmitted = false

  get userData() { return this.loginForm.controls }
  get userPassword() { return this.loginForm.controls.password }
  errorMsg = null

  constructor(private Auth: AuthService, private router : Router, private global : GlobalService){}
  handleSubmit() {
    this.isSubmitted = true
    if (this.loginForm.valid) {
      //subscribe==> response , error , completed
      this.Auth.login(this.loginForm.value).subscribe(res => {
        if (res.status == 'Success') {
          localStorage.setItem('userToken', res.data.token)
          localStorage.setItem('userName', `${res.data.first_name} ${res.data.last_name}`)
          this.global.isLogin = true
          this.router.navigateByUrl('/')
        }
      },
        (err) => {
          console.log(err.error.message)
        this.errorMsg =err.error.message
        }, () => {
        
      })
      console.log(this.loginForm)

    }
  
}
  }

  


