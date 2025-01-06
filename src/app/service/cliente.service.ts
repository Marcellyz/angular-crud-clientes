
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string = environment.apiCliente

  constructor(private http:HttpClient) { }

  //método para listar os cliente
  selecionarCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  //método para cadastrar os cliente
  cadastrarCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente)
  }

  //método para editar os cliente
  editarCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url,cliente)
  }
  //método para deletar os cliente
  deletarCliente(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}${id}`)
  }
}
