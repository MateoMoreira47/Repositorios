import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Api } from '../utils/api';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cart: any[] = []

  constructor(
    private http: HttpClient,
    private _auth:AuthService
  ) { }

  async getPaymentMethods() {
    try {
      const response:any = await lastValueFrom(this.http.get(Api.metodosPago));
      console.log("🚀 ~ getPaymentMethods:", response)
      return response
    } catch (error) {
      console.log("🚀 ~ getPaymentMethods  ~ error:", error)
      return []
    }
  }

  addCart(product: any) {
    if(this.cart.find(item => item.idProducto === product.idProducto)) {
      this.cart.forEach(item => {
        if(item.idProducto === product.idProducto) {
          item.cantidad += 1
          item.total = product.precio * item.cantidad
        }
      })
      return
    }
    this.cart.push(product);
  }

  removeCart(id: string) {
    this.cart = this.cart.filter(item => item.idProducto !== id);
  }

  get idClient(){
    return this._auth.user.idCliente
  }

  async purchase(total:number, metodoID:string){
    try {
      const payload:any = {
        cliente_id: this.idClient,
        fecha: new Date(),
        total,
        metodo_pago_id: metodoID,
        productos: this.cart.map( item => {
          return {
            idProducto: item.idProducto,
            cantidad: item.cantidad,
            total: item.total
          }
        })
      }

      const response = await lastValueFrom(
        this.http.post(Api.compras, payload)
      )

      if(response) {
        alert('¡Compra finalizada! Gracias por su compra.');
        this.cart = [];
      }

      return response
    } catch (error) {
      console.log("🚀 ~ purchase ~ error:", error)
      alert('Hubo un error al procesar su compra. Por favor, vuelva a intentarlo.');
      return null
    }
  }

  async getCompras() {
    if(this._auth.user.role === 'ADMIN') {
      return this.getComprasAdmin()
    }

    return this.getComprasCliente()
  }

  async getComprasAdmin(){
    try {
      const response:any = await lastValueFrom(this.http.get(Api.compras));
      console.log("🚀 ~ getAll ~ response:", response)
      return response
    } catch (error) {
      console.log("🚀 ~ getAll ~ error:", error)
      return []
    }
  }

  async getComprasCliente(){
    try {
      const response:any = await lastValueFrom(this.http.get(Api.comprasClient(this.idClient)));
      console.log("🚀 ~ getAll ~ response:", response)
      return response
    } catch (error) {
      console.log("🚀 ~ getAll ~ error:", error)
      return []
    }
  }
  async create(data: any) {
    try {
      const response = await lastValueFrom<any>(
        this.http.post(Api.products, data)
      )
      if (response) {
        alert('Producto creado exitosamente')
      }
      return response
    } catch (error) {
      return null
    }
  }

  async update(id:string, data: any) {
    try {
      const response = await lastValueFrom<any>(
        this.http.put(Api.products, data)
      )
      if (response) {
        alert('Producto creado exitosamente')
      }
      return response
    } catch (error) {
      return null
    }
  }


  async getAll() {
    try {
      const response:any = await lastValueFrom(this.http.get(Api.products));
      console.log("🚀 ~ getAll ~ response:", response)
      return response
    } catch (error) {
      console.log("🚀 ~ getAll ~ error:", error)
      return []
    }
  }

  async delete(id:string) {
    try {
      const response:any = await lastValueFrom(this.http.delete(Api.productsById(id)));
      console.log("🚀 ~ getAll ~ response:", response)
      alert('Producto eliminado exitosamente')
      return response
    } catch (error) {
      console.log("🚀 ~ getAll ~ error:", error)
      return []
    }
  }


  async getByCategory(id:string) {
    try {
      const response:any = await lastValueFrom(this.http.get(Api.productsCategory(id)));
      console.log("🚀 ~ getAll ~ response:", response)
      return response
    } catch (error) {
      console.log("🚀 ~ getAll ~ error:", error)
      return []
    }
  }

  async getCategories() {
    try {
      const response:any = await lastValueFrom(this.http.get(Api.cateogries));
      console.log("🚀 ~ getCategories ~ response:", response)
      return response
    } catch (error) {
      console.log("🚀 ~ getCategories ~ error:", error)
      return []
    }
  }

  async createCategory(data: any) {
    try {
      const response = await lastValueFrom<any>(
        this.http.post(Api.cateogries, data)
      )
      if (response) {
        alert('Categoría creada exitosamente')
      }
      return response
    } catch (error) {
      return null
    }
  }
}
