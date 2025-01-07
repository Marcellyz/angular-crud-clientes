import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';
import { Routes } from '@angular/router';
import { CadastrarClientesComponent } from './pages/cadastrar-clientes/cadastrar-clientes.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listar-clientes', pathMatch: 'full' },
  { path: 'listar-clientes', component: ListarClientesComponent },
  { path: 'cadastrar-novo-cliente', component:  CadastrarClientesComponent },
];
