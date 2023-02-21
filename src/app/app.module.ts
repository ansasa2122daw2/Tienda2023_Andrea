import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditCategoriasComponent } from './edit-categorias/edit-categorias.component';
import { RouterLinkActive } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCategoriasComponent } from './add-categorias/add-categorias.component';

import Swal from 'sweetalert2';
import { PipePersonalizadaPipe } from './pipe/pipe-personalizada.pipe';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CategoriasComponent,
    EditCategoriasComponent,
    AddCategoriasComponent,
    PipePersonalizadaPipe,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterLinkActive,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
