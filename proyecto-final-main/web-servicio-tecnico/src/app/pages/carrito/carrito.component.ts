import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  total: number = 0;
  metodosPago: any[] = [];
  metodoPagoSeleccionado: string = '';

  constructor(
    private _product: ProductsService
  ) {
    this.getMetodosPago()
    this.calcularTotal()
  }

  async getMetodosPago() {
    this.metodosPago = await this._product.getPaymentMethods();
  }

  calcularTotal() {
    this.total = this.carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  }

  get carrito() {
    return this._product.cart
  }

  eliminarProducto(product: any) {
    this._product.removeCart(product.idProducto);
    this.calcularTotal();
  }

  // Finaliza la compra (puedes agregar lógica adicional aquí)
  async finalizarCompra() {
    if (!this.metodoPagoSeleccionado) {
      alert('Seleccione un método de pago')
      return
    }
    const response = await this._product.purchase(this.total, this.metodoPagoSeleccionado);
    if (!response) return
    this.calcularTotal();
  }
}
