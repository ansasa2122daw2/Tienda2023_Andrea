import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriasComponent } from './categorias/add-categorias/add-categorias.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditCategoriasComponent } from './categorias/edit-categorias/edit-categorias.component';
import { ViewCategoriasComponent } from './categorias/view-categorias/view-categorias.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'add-categorias', component: AddCategoriasComponent},
  {path:'edit-categorias', component: EditCategoriasComponent},
  {path:'view-categoria', component: ViewCategoriasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
