import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/service/conexion.service';
import { Observable } from 'rxjs';
import { CategoriasComponent } from '../categorias/categorias.component';

@Component({
  selector: 'app-edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrls: ['./edit-categorias.component.css']
})
export class EditCategoriasComponent{

  cat: Categoria = {id_categoria: 0, cat_nombre: "", cat_descripcion: ""};
  nombre: String;
  desc: String;
  id_cat:number;

  submitted = false;

  constructor(private router: Router, private conexion: ConexionService, private route: ActivatedRoute){
    this.id_cat = history.state.data.cat.id_categoria;
    this.nombre = history.state.data.cat.cat_nombre; 
    this.desc = history.state.data.cat.cat_descripcion;   
  }

  editData(value:any){
    let body = {
      id_categoria: this.id_cat,
      cat_nombre: value.cat_nombre,
      cat_descripcion: value.cat_descripcion,
    }

    this.conexion.putApi('categorias',body).subscribe(response => {
      this.router.navigate(['/categorias']);
      
      
    })
  }


}

