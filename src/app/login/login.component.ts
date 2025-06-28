import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  error: string = '';



  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onSubmit() {
    if (this.loginForm.valid) {

      const { username, password } = this.loginForm.value;
      if (username === 'admin' && password === 'Welcome@123') {
        console.log("from submitted succesfully ", this.loginForm.value)
        this.router.navigate(['/home/accountDetails'])
      } else {

          this.error = "wrong Credentials!"

        setTimeout(() => {
                  this.router.navigate(['/login']);

        }, 1000);
        // 


      }
    }

  }




}
