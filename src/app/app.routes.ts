import { Routes } from '@angular/router';

import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';
import { CadastrarClientesComponent } from './pages/cadastrar-clientes/cadastrar-clientes.component';
import { EditarClientesComponent } from './pages/editar-clientes/editar-clientes.component';
import { DeletarClientesComponent } from './pages/deletar-clientes/deletar-clientes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listar-clientes', pathMatch: 'full' },
  { path: 'listar-clientes', component: ListarClientesComponent },
  { path: 'cadastrar-novo-cliente', component:  CadastrarClientesComponent },
  { path: 'editar-clientes/:id', component: EditarClientesComponent },
  { path: 'deletar-clientes/:id', component: DeletarClientesComponent },
];
