import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditCategoriasComponent } from './edit-categorias/edit-categorias.component';
import { AddCategoriasComponent } from './add-categorias/add-categorias.component';
import { PipePersonalizadaPipe } from './pipe/pipe-personalizada.pipe';
import { ProductosComponent } from './productos/productos.component';
import { ConexionService } from './service/conexion.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        CategoriasComponent,
        EditCategoriasComponent,
        AddCategoriasComponent,
        PipePersonalizadaPipe,
        ProductosComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TiendaB'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TiendaB');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('.content span')?.textContent).toContain('TiendaB app is running!');
  });
});
