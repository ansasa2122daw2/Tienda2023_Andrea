import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { HttpClientModule } from '@angular/common/http';

import { Categoria } from '../interfaces/Categoria';
import { ConexionService } from '../service/conexion.service';
import { AddCategoriasComponent } from './add-categorias.component';

describe('AddCategoriasComponent', () => {
  let component: AddCategoriasComponent;
  let fixture: ComponentFixture<AddCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoriasComponent ],
      imports: [ RouterTestingModule, FormsModule],
      providers: [ConexionService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
