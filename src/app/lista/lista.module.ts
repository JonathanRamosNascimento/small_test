import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaComponent } from './components/lista/lista.component';
import { ListaRoutingModule } from './lista-routing.module';

@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    ListaRoutingModule,
  ]
})
export class ListaModule { }
