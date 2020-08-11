import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPedidoComponent, CadPedidoComponent } from './paginas/pedido';

const routes: Routes = [
  { path: 'listar-pedido', component: ListPedidoComponent },
  { path: 'cadastrar-pedido', component: CadPedidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
