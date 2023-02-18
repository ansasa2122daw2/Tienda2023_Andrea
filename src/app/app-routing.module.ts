import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditCategoriasComponent } from './edit-categorias/edit-categorias.component';
import { MainComponent } from './components/main/main.component';
import { AddCategoriasComponent } from './add-categorias/add-categorias.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'edit-categorias', component: EditCategoriasComponent},
  {path:'add-categorias',component:AddCategoriasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
