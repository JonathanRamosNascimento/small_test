import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormEnderecoComponent } from './components/form-endereco/form-endereco.component';


const routes: Routes = [
  { path: 'endereco', component: FormEnderecoComponent },
  { path: 'lista', loadChildren: () => import('./lista/lista.module').then(m => m.ListaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
