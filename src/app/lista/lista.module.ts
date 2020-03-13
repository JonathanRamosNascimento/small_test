import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaComponent } from './components/lista/lista.component';
import { ListaRoutingModule } from './lista-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    ListaRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ListaModule { }
