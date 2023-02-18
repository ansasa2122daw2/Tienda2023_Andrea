import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../interfaces/Categoria';
import { ConexionService } from '../service/conexion.service';

@Component({
  selector: 'app-add-categorias',
  templateUrl: './add-categorias.component.html',
  styleUrls: ['./add-categorias.component.css']
})
export class AddCategoriasComponent implements OnInit{
  ngOnInit(): void {
  }
  categoria: Categoria= {id_categoria: 0, cat_nombre: "", cat_descripcion: ""}

  constructor(private conexion: ConexionService, private router: Router){

  }

  submitData(value:any){
    let body = {
      cat_nombre: value.cat_nombre,
      cat_descripcion: value.cat_descripcion,
    }
    this.conexion.postApi('categorias',body).subscribe(response => {
      this.router.navigate(['/categorias']);
      
    })
  }


}
