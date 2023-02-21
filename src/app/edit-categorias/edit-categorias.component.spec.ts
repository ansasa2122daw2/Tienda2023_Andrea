import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AnonymousSubject } from 'rxjs/internal/Subject';

import { EditCategoriasComponent } from './edit-categorias.component';
import { Categoria } from '../interfaces/Categoria';
import { ConexionService } from '../service/conexion.service';

describe('EditCategoriasComponent', () => {
  let component: EditCategoriasComponent;
  let fixture: ComponentFixture<EditCategoriasComponent>;

  let espia: any;
  let comu: ConexionService;

  let categoria: Categoria = {
    id_categoria: 1,
    cat_nombre: "Sedoso",
    cat_descripcion: ""
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoriasComponent ],
      imports: [ RouterTestingModule, FormsModule],
      providers: [ConexionService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
