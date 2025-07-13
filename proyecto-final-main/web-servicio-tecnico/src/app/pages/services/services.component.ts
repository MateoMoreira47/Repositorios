import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  servicios: any[] = [
    {
      title: "Reparación de Computadora",
      description: "Solucionamos problemas de hardware y software en laptops y PC de escritorio"
     },
    {
      title: "Mantenimiento Preventivo",
      description: "Optimiza el rendimiento de tus dispositivos con nuestras soluciones de mantenimiento."
     },
    {
      title: "Instalación de Rede",
      description: "Configura y mejora tu red para un rendimiento óptimo en tu hogar o negocio."
     },
    {
      title: "Recuperación de Dato",
      description: "Recuperamos información valiosa de discos duros dañados o formateados"
     },
    {
      title: "Venta de Accesorio",
      description: "Encuentra los mejores accesorios y repuestos para tus equipos"
     },
    {
      title: "Consultoría Técnica",
      description: "Asesoramiento especializado para resolver tus problemas tecnológicos."
     },
  ]
  constructor(
    private router: Router,
    private _auth: AuthService
  ) {}

  abrirCita(cita:any){
    if(!this._auth.user){
      alert('Debes iniciar sesion para crear una cita')
      this.router.navigate(['login'])
      return
    }

    if(!this._auth.isClient) return

    this.router.navigate(['panel-client/nueva-cita'], {
      queryParams: {
        cita: JSON.stringify(cita)
      }
    })
  }
}
