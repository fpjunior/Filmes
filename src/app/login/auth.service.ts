import { Injectable, Output,  } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { EventEmitter } from '@angular/core';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter <boolean> ();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'qwe123' &&
     usuario.senha === 'qwe123') {
       this.mostrarMenuEmitter.emit(true);
       this.usuarioAutenticado = true;
       
        
      this.router.navigate(['/filmes-list']);
      
      
     } else{
       this.usuarioAutenticado = false;
       this.mostrarMenuEmitter.emit(false);
     }
  }
usuarioEstaAutenticado(){
  return this.usuarioAutenticado;
}

}
