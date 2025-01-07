import { Component } from '@angular/core';
import { ListarClientesComponent } from "../listar-clientes/listar-clientes.component";

@Component({
  selector: 'app-home',
  imports: [ ListarClientesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
