import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeCreateComponent } from './filme-create/filme-create.component';
import { FilmeEditComponent } from './filme-edit/filme-edit.component';
import { FilmesListComponent } from './filme-list/filme-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-filme' },
  { path: 'create-filme', component: FilmeCreateComponent },
  { path: 'filmes-list', component: FilmesListComponent },
  { path: 'filme-edit/:id', component: FilmeEditComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }