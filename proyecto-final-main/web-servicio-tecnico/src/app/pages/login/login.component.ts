import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutes } from '../../utils/app-routes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm:FormGroup

  routes = AppRoutes

  constructor(
    private router:Router,
    private form:FormBuilder,
    private _auth: AuthService
  ){
    this.loginForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit(){
    this.loginForm.markAllAsTouched()
    if(this.loginForm.invalid) return
    const { email, password } = this.loginForm.value
    const response = await this._auth.auth(email, password)

    if(response){
      this.loginForm.reset()
      this.router.navigate([AppRoutes.PANEL_CLIENT])
      console.log(response)
    }
  }
}
