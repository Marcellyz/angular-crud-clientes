import { ClienteService } from './../../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';
import { Cliente } from '../../model/Cliente';


@Component({
  selector: 'app-listar-clientes',
  imports: [HeaderComponent, MatTableModule, MatButtonModule,MatIconModule,RouterLink, RouterModule],
  templateUrl: './listar-clientes.component.html',
  styleUrl: './listar-clientes.component.scss'
})
export class ListarClientesComponent implements OnInit {

  cliente:Cliente[]

  displayedColumns: string[] = ['id', 'nome', 'idade', 'cidade', 'actions'];

  constructor(private clienteService:ClienteService){
    this.cliente = [{'id':0,'nome':'','idade':0, 'cidade':'' }]
  }

  ngOnInit(): void{
    this.clienteService.selecionarCliente().subscribe( cliente => this.cliente = cliente);
  }


}
