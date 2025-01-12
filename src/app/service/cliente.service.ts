import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url: string = environment.apiCliente;

  constructor(private http: HttpClient) {}

  //método para listar os cliente
  selecionarCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  //método para cadastrar os cliente
  cadastrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  //método para editar os cliente
  editarCliente(cliente: Cliente): Observable<Cliente> {
    const urlId = `${this.url}${cliente.id}`;
    return this.http.put<Cliente>(urlId, cliente);
  }

  // método para buscar cliente por ID
  buscarClientePorId(id: number): Observable<Cliente[]> {
    const urlId = `${this.url}${id}`;
    return this.http.get<Cliente[]>(urlId);
  }
  //método para deletar os cliente
  deletarCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`);
  }
}
