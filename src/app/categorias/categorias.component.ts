import { Component } from '@angular/core';
import {ConexionService} from '../service/conexion.service'
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/Categoria';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  @Input() form:String;
  listado: Categoria[] = [];
  // categoria: Categoria ={id_categoria:0, cat_nombre: '', cat_descripcion:''}; para el id
  constructor(private route: ActivatedRoute, private conexion: ConexionService){
    const dato: Observable<any> = this.conexion.leerApi('categorias');
    const elim: Observable<any> = this.conexion.deleteApi('categorias');

    dato.subscribe((resp:any) => {
      // this.categoria = resp as Categoria[]; se haria asi si fuera solo para un id
      // this.listado = resp;
      // let stat:number = resp.status;

      // if(stat==1){
        this.listado = resp.data as Categoria[];
        // console.log(this.listado);
      // }
    })
  }

  irFormulario(form: Categoria):void{
      this.router.navigate([])
      

  }

}
