import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CitiesService } from '../../services/cities.service';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { AppRoutes } from '../../utils/app-routes';

@Component({
  selector: 'app-register-client',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-client.component.html',
  styleUrl: './register-client.component.scss'
})
export class RegisterClientComponent  {

  registroForm: FormGroup
  cities: any[] = []

  constructor(
    private router:Router,
    private fb: FormBuilder,
    private _city:CitiesService,
    private _client:ClientService
  ) {
    this.registroForm = this.fb.group({
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      fechaNac: ['', Validators.required],
      ciudad_id: ['', Validators.required]
    });
    this.getCities()
  }

  async getCities() {
    this.cities = await this._city.getALL()
  }

  async onSubmit() {
    this.registroForm.markAllAsTouched()
    if (this.registroForm.invalid) return
    const response = await this._client.create(this.registroForm.value)

    if (response) {
      console.log(response)
      this.registroForm.reset()
      this.router.navigate([AppRoutes.LOGIN])
    }
  }
}
