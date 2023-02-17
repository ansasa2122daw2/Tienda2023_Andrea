import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/service/conexion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrls: ['./edit-categorias.component.css']
})
export class EditCategoriasComponent {

  id: number;
  nombre: String;
  desc: String;

  constructor(private router: Router, private conexion: ConexionService){
    this.id = history.state.data.cat.id_categoria;
    this.nombre = history.state.data.cat.cat_nombre; 
    this.desc = history.state.data.cat.cat_descripcion;   
  }

  editData(value:any){
    let body = {
      cat_nombre: value.cat_nombre,
      cat_descripcion: value.cat_descripcion,
    }
    this.conexion.putApi('categorias',body).subscribe(response => {
      this.router.navigate(['/categorias']);
      
    })
  }


}

