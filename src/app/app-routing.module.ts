import { NgModule } from '@angular/core';
import { FilmeCreateComponent } from './filme-create/filme-create.component';
import { FilmeEditComponent } from './filme-edit/filme-edit.component';
import { FilmesListComponent } from './filme-list/filme-list.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';


const routes: Routes = [
  
  { path: 'create-filme', component: FilmeCreateComponent, canActivate:[AuthGuard] },
  { path: 'filmes-list', component: FilmesListComponent, canActivate:[AuthGuard]  },
  { path: 'filme-edit/:id', component: FilmeEditComponent, canActivate:[AuthGuard]  },
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})

export class AppRoutingModule { }