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
import { AuthGuard } from './guards/auth-guard';
import { HighlightDirective } from './filme-list/highlight.directive';
import { UsuarioComponent } from './usuario/usuario.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    FilmeCreateComponent,
    FilmeEditComponent,
    FilmesListComponent,
    LoginComponent,
    HighlightDirective,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule
  ],

  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }