import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

// Components
import { FilmeCreateComponent } from './filme-create/filme-create.component';
import { FilmeEditComponent } from './filme-edit/filme-edit.component';
import { FilmesListComponent } from './filme-list/filme-list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmeCreateComponent,
    FilmeEditComponent,
    FilmesListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }