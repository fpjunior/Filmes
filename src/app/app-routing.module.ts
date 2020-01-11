import { NgModule } from '@angular/core';
import { FilmeCreateComponent } from './filme-create/filme-create.component';
import { FilmeEditComponent } from './filme-edit/filme-edit.component';
import { FilmesListComponent } from './filme-list/filme-list.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  { path: 'create-filme', component: FilmeCreateComponent },
  { path: 'filmes-list', component: FilmesListComponent },
  { path: 'filme-edit/:id', component: FilmeEditComponent },
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})

export class AppRoutingModule { }