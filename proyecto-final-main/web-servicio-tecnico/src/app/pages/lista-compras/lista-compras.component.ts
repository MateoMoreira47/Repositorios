import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  compras: any[] = []

  constructor(
    private _product: ProductsService
  ) {
    this.getCompras()
  }

  async getCompras() {
    this.compras = await this._product.getCompras()
  }
}
