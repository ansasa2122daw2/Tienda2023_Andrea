import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ConexionService} from '../service/conexion.service'
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/Categoria';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  cat1: Categoria = {id_categoria: 0, cat_nombre: "", cat_descripcion: ""};
  listado: Categoria[] = [];

  /**
   * Para enviar los datos a edit categoria donde esta el formulario
   * @param dCat 
   */

  irEdit(dCat: Categoria){
    this.router.navigate(['/edit-categorias'],{
      state: {data: { cat: dCat} },
    });
  }

  constructor(private route: ActivatedRoute,private router: Router,private conexion: ConexionService){
    const dato: Observable<any> = this.conexion.leerApi('categorias');

    dato.subscribe((resp:any) => {
      // this.categoria = resp as Categoria[]; se haria asi si fuera solo para un id
      this.listado = resp as Categoria[];

    })
  }

  /**
   * Elimina de la base de datos el id que has clickado en el icono rojo
   * @param id 
   */
  deleteId(id:number) {
    this.conexion.deleteApi('categorias/'+ id).subscribe(response => {
        window.location.reload(),9000;
      })
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Categoria eliminada',
        showConfirmButton: false,
        timer: 1000
      })
  }

  /**
   * En el pequeño formulario de arriba envia los datos a la base de datos con este método
   * @param value 
   */

  submitData(value:any){
    let body = {
      cat_nombre: value.cat_nombre,
      cat_descripcion: value.cat_descripcion,
    }
    this.conexion.postApi('categorias',body).subscribe(response => {
      window.location.reload();
      
    })
  }

  }
    
