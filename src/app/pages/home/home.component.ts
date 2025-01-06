import { Component } from '@angular/core';
import { CadastrarClientesComponent } from "../cadastrar-clientes/cadastrar-clientes.component";

@Component({
  selector: 'app-home',
  imports: [CadastrarClientesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
