import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Api } from '../utils/api';
import { AppStorage } from '../utils/app-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any
  role: 'CLIENTE' | 'ADMIN' = 'CLIENTE'

  constructor(
    private http: HttpClient
  ) {
    const userStr = localStorage.getItem(AppStorage.user)
    this.user = userStr ? JSON.parse(userStr) : null
    this.role = this.user?.role ?? 'CLIENTE'
    console.log("🚀 ~ this.user:", this.user)
  }

  get isClient() {
    return this.role === 'CLIENTE'
  }
  logout() {
    localStorage.removeItem(AppStorage.user)
    this.user = null
  }

  async auth(email: string, password: string) {
    try {
      const response = await lastValueFrom<any>(
        this.http.post(Api.auth, { email, password })
      )
      console.log("🚀 ~ auth ~ response:", response)

      if(response) {
        this.user = response
        this.role = response.role ?? 'CLIENTE'
        localStorage.setItem(AppStorage.user, JSON.stringify(response))
      }

      return response
    } catch (error) {
      console.error(error);
      return null
    }
  }
}
