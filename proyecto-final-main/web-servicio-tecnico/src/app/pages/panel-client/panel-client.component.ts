import { Component } from '@angular/core';
import { AppStorage } from '../../utils/app-storage';
import { Router } from '@angular/router';
import { AppRoutes } from '../../utils/app-routes';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-panel-client',
  templateUrl: './panel-client.component.html',
  styleUrl: './panel-client.component.scss'
})
export class PanelClientComponent {

  constructor(
    private router:Router,
    private _auth:AuthService
  ){}

  logout(){
    this._auth.logout()
    this.router.navigate([AppRoutes.LOGIN]);
  }
}
