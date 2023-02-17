import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditCategoriasComponent } from './edit-categorias/edit-categorias.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'edit-categorias', component: EditCategoriasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
