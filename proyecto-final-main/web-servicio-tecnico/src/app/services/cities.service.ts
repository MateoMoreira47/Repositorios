import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Api } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(
    private http: HttpClient
  ) { }

  async getALL() {
    try {
      const response = await lastValueFrom<any>(
        this.http.get(Api.ciudades)
      )

      return response ?? []
    } catch (error) {
      return []
    }
  }
}
