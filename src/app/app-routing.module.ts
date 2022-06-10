import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Buscar1Component } from './Paginas/buscar1/buscar1.component';
import { BuscarXAutorComponent } from './Paginas/buscar-xautor/buscar-xautor.component';
const routes: Routes = [
  {path: 'buscar1', component: Buscar1Component},
  {path: 'buscar-xautor', component: BuscarXAutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
