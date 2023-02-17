import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AddCategoriasComponent } from './categorias/add-categorias/add-categorias.component';
import { EditCategoriasComponent } from './categorias/edit-categorias/edit-categorias.component';

import { HttpClientModule } from '@angular/common/http';
import { ViewCategoriasComponent } from './categorias/view-categorias/view-categorias.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CategoriasComponent,
    AddCategoriasComponent,
    EditCategoriasComponent,
    ViewCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
