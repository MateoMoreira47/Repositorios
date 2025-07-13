import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';
import { CitaService } from '../../services/cita.service';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nueva-cita',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './nueva-cita.component.html',
  styleUrl: './nueva-cita.component.scss'
})
export class NuevaCitaComponent {
  citaForm: FormGroup;
  citas: any[] = [];
  empleados: any[] = [];
  clientes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private activeRoute:ActivatedRoute,
    private _auth:AuthService,
    private _empleado: EmpleadosService,
    private _cita: CitaService,
    private _clientes: ClientService
  ) {

    this.citaForm = this.fb.group({
      idEmpleado: ['', [Validators.required]],
      idCliente: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });

    if(this.role === 'CLIENTE'){
      this.citaForm.get('idCliente')?.setValue(this._auth.user.idCliente)
    }

    this.setParamUrl()
    this.getData()
  }

  setParamUrl(){
    const param = this.activeRoute.snapshot.queryParams['cita']
    if(!param) return
    const citaParam = JSON.parse(param)
    console.log("🚀 ~ setParamUrl ~ citaParam:", citaParam)
    this.citaForm.get('descripcion')?.setValue(`${citaParam.title} \n ${citaParam.description}`)

  }

  get role(){
    return this._auth.user.role
  }

  async getCitas(){
    if(this.role === 'CLIENTE'){
      this.citas = await this._cita.getByClient( this._auth.user.idCliente)
      console.log("🚀 ~ getCitas ~ this.citas :", this.citas )
      return
    }

    this.citas = await this._cita.getAll()

  }
  async getData(){
    this.empleados = await this._empleado.getAll()
    this.clientes = await this._clientes.getAll()
    this.getCitas()
  }


  async onSubmit() {
    this.citaForm.markAllAsTouched()
    if (this.citaForm.invalid) return
    const response = await this._cita.create(this.citaForm.value)
    if(response){
      this.citaForm.reset()
      this.getCitas()
    }
  }
}
