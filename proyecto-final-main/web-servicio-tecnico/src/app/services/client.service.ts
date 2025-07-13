import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Api } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  async getAll() {
    try {
      const response = await lastValueFrom<any>(
        this.http.get(Api.client)
      )

      return response ?? []
    } catch (error) {
      return []
    }
  }

  async create(data: any) {
    try {
      const response = await lastValueFrom<any>(
        this.http.post(Api.client, { ...data, role: 'CLIENTE  ' })
      )
      if (response) {
        alert('Cliente creado exitosamente')
      }
      return response
    } catch (error) {
      return null
    }
  }
}
