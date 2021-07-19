import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { ModalService } from './detalle/modal.service';
import swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  paginador: any;
  clienteSeleccionado:Cliente;

  constructor(private clienteService: ClienteService,
  private modalService : ModalService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //--Se encarga de suscribir un observador cada vez que cambia el parametro page en la ruta
    this.activatedRoute.paramMap.subscribe(params =>{
      let page: number = +params.get('page');
      if (!page) {
        page = 0;
      }

    this.clienteService.getClientes(page).pipe(
      tap(response => {
        console.log('ClientesComponent: tap 3');
        (response.content as Cliente[]).forEach(cliente => {
          console.log(cliente.nombre);
        })
      })
            //--- Funcion anonima resumida
    ).subscribe(response => {
      this.clientes=response.content as Cliente[];
      this.paginador=response;
    });
    })
  }

  delete(cliente:Cliente): void {
    swal({
      title: 'Are you sure?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
        if (result.value) {
          this.clienteService.delete(cliente.id).subscribe(
            response => {
              this.clientes = this.clientes.filter(cli => cli !== cliente)
              swal(
                'Cliente Eliminado!',
                `Cliente ${cliente.nombre} eliminado con exito.`,
                'success'
              )
              return response;
            }
          )
        }
      })
  }

  abrirModal(cliente:Cliente) {
    this.clienteSeleccionado = cliente;
    this.modalService.abrirModal();
  }
}
