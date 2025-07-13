import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

  productoForm: FormGroup;
  productos: any[] = [];
  categorias: any[] = [];

  editMode: boolean = false
  idEdit:string = ''

  constructor(
    private fb: FormBuilder,
    private _producto: ProductsService
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: [''],
      precio: [0, [Validators.required, Validators.min(0.01)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      categoria_id: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
    });
    this.getCategories()
    this.getProductos()
  }

  async getProductos() {
    this.productos = await this._producto.getAll()
  }

  async getCategories() {
    this.categorias = await this._producto.getCategories()
  }

  async onSubmit() {
    this.productoForm.markAllAsTouched()
    if (this.productoForm.invalid) return
    let response:any;

    if(this.editMode) {
      response = await this._producto.update( this.idEdit,this.productoForm.value)
    } else{
      response = await this._producto.create(this.productoForm.value)
    }

    if(response) {
      this.productoForm.reset()
      this.getProductos()
    }
  }

  cancelEdit(){
    this.productoForm.reset()
    this.editMode = false
    this.idEdit = ''
  }

  onEdit(producto: any){
    this.productoForm.patchValue(producto)
    this.editMode = true
    this.idEdit = producto.idProducto
  }

  async onDelete(idProducto: any){
    const response = await this._producto.delete(idProducto)

    if(response) {
      this.getProductos()
      this.productoForm.reset()
    }
  }
}
