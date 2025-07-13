import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelClientComponent } from './panel-client.component';
import { NuevaCitaComponent } from '../nueva-cita/nueva-cita.component';
import { ListaComprasComponent } from '../lista-compras/lista-compras.component';

const routes: Routes = [
  {
    path: '',
    component: PanelClientComponent,
    children: [
      {
        path: 'nueva-cita',
        component: NuevaCitaComponent
      },
    {
      path: 'mis-compras',
      component: ListaComprasComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelClientRoutingModule { }
