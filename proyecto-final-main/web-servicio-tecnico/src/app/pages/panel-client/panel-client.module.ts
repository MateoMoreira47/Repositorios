import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelClientRoutingModule } from './panel-client-routing.module';
import { PanelClientComponent } from './panel-client.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PanelClientComponent
  ],
  imports: [
    CommonModule,
    PanelClientRoutingModule,
    ReactiveFormsModule
  ]
})
export class PanelClientModule { }
