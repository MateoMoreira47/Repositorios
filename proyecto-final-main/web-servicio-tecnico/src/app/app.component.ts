import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutes } from './utils/app-routes';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'destinos-web';
  routes = AppRoutes

  constructor(
    private _auth:AuthService
  ){}

  get user() {
    return this._auth.user
  }
}
