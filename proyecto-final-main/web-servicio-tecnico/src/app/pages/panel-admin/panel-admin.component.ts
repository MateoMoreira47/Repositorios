import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AppRoutes } from '../../utils/app-routes';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.scss'
})
export class PanelAdminComponent {

    constructor(
      private router:Router,
      private _auth:AuthService
    ){}

    logout(){
      this._auth.logout()
      this.router.navigate([AppRoutes.LOGIN]);
    }
}
