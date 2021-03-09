import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs'; //-- Programacion reactiva
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint:string = 'http://localhost:8090/api/clientes';
  constructor(private http: HttpClient) { }

  getClientes(): Observable <Cliente[]>{
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndpoint);
  }
}
