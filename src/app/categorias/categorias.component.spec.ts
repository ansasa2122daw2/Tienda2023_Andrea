import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { HttpClientModule } from '@angular/common/http';

import { Categoria } from '../interfaces/Categoria';
import { ConexionService } from '../service/conexion.service';
import { PipePersonalizadaPipe } from '../pipe/pipe-personalizada.pipe';

import { CategoriasComponent } from './categorias.component';
import { from } from 'rxjs';

describe('CategoriasComponent', () => {
  let component: CategoriasComponent;
  let fixture: ComponentFixture<CategoriasComponent>;

  let categoria: Categoria = {
    id_categoria: 1,
    cat_nombre: "Sedoso",
    cat_descripcion: ""
  }

  let categoriaVacio: Categoria = {
    id_categoria: 0,
    cat_nombre: "",
    cat_descripcion: ""
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasComponent, PipePersonalizadaPipe ],
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
      providers: [ConexionService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //jsonResp :any = //aqui la respuesta

    //DELETE
  it('comprobando conexion.deleteApi', inject([ConexionService],(comunicaciones: ConexionService) =>{
    async () => {
      spyOn(comunicaciones, 'deleteApi').and.callFake(() =>{
            return from([categoria]);
          });
        component.deleteId(1);
        expect(component.categoria).toBe(categoriaVacio);
    }
  })
  
// }))

//   jsonResp :any = 

// it('comprobando conexion.leerApi', 
//   async () => {
//     component.categoria = categoriaVacio;
//     spyOn(comunicaciones, 'leerApi').and.callFake(() =>{
      //     return from([categoria]);
      //   });
      //  component.getLeerTodos(1);
      //  expect(component.categoria).toEqual(categoria);
//   }
//  })
  
)}
);
