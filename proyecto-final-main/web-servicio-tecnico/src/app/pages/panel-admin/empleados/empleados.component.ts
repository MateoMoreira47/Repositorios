import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from '../../../services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.scss'
})
export class EmpleadosComponent {

  empleadoForm: FormGroup;
  empleados: any[] = [];

  constructor(
    private fb: FormBuilder,
    private _empleado:EmpleadosService
  ) {
    this.empleadoForm = this.fb.group({
      cedula: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      especialidad: ['', [Validators.required]]
    });
    this.getEmpleados()
  }

  async getEmpleados(){
    this.empleados = await this._empleado.getAll()
  }

  async onSubmit() {
    this.empleadoForm.markAllAsTouched()
    if (this.empleadoForm.invalid) return
    const response = await this._empleado.create(this.empleadoForm.value)
    if(response) {
      this.empleadoForm.reset()
      this.getEmpleados()
    }
  }
}
