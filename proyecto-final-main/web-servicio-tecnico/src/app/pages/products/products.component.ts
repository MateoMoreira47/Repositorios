import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  categories:any[] = []
  productos:any[] = []

  categoria:string = ''

  constructor(
    private _product: ProductsService,
    public _auth:AuthService
  ){
    this.getCategories()
    this.getProducts()
  }

  async getCategories(){
    const data = await this._product.getCategories()
    this.categories = data
  }

  async getProducts(){
    const data = await this._product.getAll()
    this.productos = data
  }

  async filterCategory(category: string) {
    this.categoria = category
    this.productos = await this._product.getByCategory(category)
  }

  clear(){
    this.categoria = ''
    this.getProducts()
  }

  addCart(product: any) {
    this._product.addCart({
      ...product,
      cantidad:1,
      total: product.precio * 1
    })
    alert('Producto agregado al carrito')
  }

}
