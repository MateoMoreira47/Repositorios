import { Component } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  empleados:any[] = []

  constructor(
    private _empleado:EmpleadosService
  ) {
    this.getEmpleados()
  }

  async getEmpleados() {
    this.empleados = await this._empleado.getAll()
  }

}
