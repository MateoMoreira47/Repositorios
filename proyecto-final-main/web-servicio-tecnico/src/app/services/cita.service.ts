import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Api } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(
    private http: HttpClient
  ) { }

  async getAll() {
    try {
      const response = await lastValueFrom<any>(
        this.http.get(Api.citas)
      )

      return response ?? []
    } catch (error) {
      return []
    }
  }

  async getByClient(id:string) {
    try {
      const response = await lastValueFrom<any>(
        this.http.get(Api.citasClient(id))
      )

      return response ?? []
    } catch (error) {
      return []
    }
  }

  async create(data: any) {
    try {
      const response = await lastValueFrom<any>(
        this.http.post(Api.citas, data)
      )
      if (response) {
        alert('Cita creada exitosamente')
      }
      return response
    } catch (error) {
      return null
    }
  }
}
