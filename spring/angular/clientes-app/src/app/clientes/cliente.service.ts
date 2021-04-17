import { Injectable } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';
//import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { of, Observable, throwError } from 'rxjs'; //-- Programacion reactiva
import { map, catchError, tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint:string = 'http://localhost:8090/api/clientes';

  private httpHeaders = new HttpHeaders({'ContentType': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getClientes(page: number): Observable <any>{
    return this.http.get<Cliente[]>(this.urlEndpoint + '/page/' + page).pipe(
      tap((response:any) =>{
        console.log('ClienteService: tap 1');
        (response.content as Cliente[]).forEach(cliente =>{
          console.log(cliente.nombre);
        })
      }),
      map((response:any)=> {
        (response.content as Cliente[]).map(cliente =>{
          cliente.nombre = cliente.nombre.toUpperCase();
          //let datePipe = new DatePipe('es');
          //cliente.createAt = datePipe.transform(cliente.createAt, 'EEEE dd, MMMM yyyy'); //formatDate(cliente.createAt, 'dd-MM-yyyy', 'en-US');
          return cliente;
        });
        return response;
      }),
      tap(response =>{
        console.log('ClienteService: tap 2');
        (response.content as Cliente[]).forEach(cliente => {
          console.log(cliente.nombre);
        })
      })
    )
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post(this.urlEndpoint, cliente, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(e =>{

        if(e.status==400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.errors, "error");
        return throwError(e);
      })
    )
  }

  getCliente(id:any): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(e =>{
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        swal('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${this.urlEndpoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e =>{

        if(e.status==400) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.errors, "error");
        return throwError(e);
      })
    )
  }

  delete(id:number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, "error");
        return throwError(e);
      })
    )
  }

  uploadPhoto(file: File, id:any): Observable<Cliente> {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("id", id);

    return this.http.post(`${this.urlEndpoint}/upload`, formData).pipe(
      map((response:any) => response.cliente as Cliente),
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, "error");
        return throwError(e);
      })
    )
  }
}
