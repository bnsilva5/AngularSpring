import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  cliente:Cliente;
  titulo: string = "Detalle del cliente";
  fotoSeleccionada: File;

  constructor(private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params =>{
      let id:number = +params.get('id');
      if (id) {
        this.clienteService.getCliente(id).subscribe(cliente =>{
          this.cliente = cliente;
        })
      }
    });
  }

  seleccionarFoto(event:any) {
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      swal('Error al seleccionar imagen: ', 'El archivo debe ser del tipo imagen', 'error');
      this.fotoSeleccionada = null;
    }
  }

  subirFoto() {

    if (!this.fotoSeleccionada){
      swal('Error Upload: ', 'Debe seleccionar una foto', 'error');
    } else {
      this.clienteService.uploadPhoto(this.fotoSeleccionada, this.cliente.id)
      .subscribe(cliente => {
        this.cliente = cliente;
        swal('La foto se ha subido completamente!', `La foto se ha subido con exito: ${this.cliente.photo}`, 'success');
      });
    }
  }

}
