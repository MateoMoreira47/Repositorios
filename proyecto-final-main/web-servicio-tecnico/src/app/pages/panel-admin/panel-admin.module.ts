import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelAdminRoutingModule } from './panel-admin-routing.module';
import { PanelAdminComponent } from './panel-admin.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';


@NgModule({
  declarations: [
    PanelAdminComponent,
    EmpleadosComponent,
    ProductosComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    PanelAdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class PanelAdminModule {}
