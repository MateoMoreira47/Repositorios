import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelAdminComponent } from './panel-admin.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevaCitaComponent } from '../nueva-cita/nueva-cita.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ListaComprasComponent } from '../lista-compras/lista-compras.component';

const routes: Routes = [
  {
    path: '',
    component: PanelAdminComponent,
    children: [
      {
        path: 'empleados',
        component: EmpleadosComponent
      },
      {
        path: 'citas',
        component: NuevaCitaComponent
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'categorias',
        component: CategoriasComponent
      },
      {
        path: 'compras',
        component: ListaComprasComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelAdminRoutingModule { }
