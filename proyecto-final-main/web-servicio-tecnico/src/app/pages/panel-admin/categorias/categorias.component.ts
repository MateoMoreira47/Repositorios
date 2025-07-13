import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent {

  categoriaForm: FormGroup;
  categorias: any[] = [];

  constructor(private fb: FormBuilder, private _producto: ProductsService) {
    this.categoriaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  async getCategories() {
    this.categorias = await this._producto.getCategories()
  }

  async onSubmit() {
    this.categoriaForm.markAllAsTouched()
    if (this.categoriaForm.invalid) return
    const response = await this._producto.createCategory(this.categoriaForm.value)
    if (response) {
      this.categoriaForm.reset()
      this.getCategories()
    }
  }
}
