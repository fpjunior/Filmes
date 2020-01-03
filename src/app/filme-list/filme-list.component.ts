import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-filmes-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmesListComponent implements OnInit {

  Filme: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadFilmes()
    
  }

  // Get filme list
  loadFilmes() {
    return this.restApi.getFilmes().subscribe((data: {}) => {
      this.Filme = data;
    })
  }

  // Delete filme
  deleteFilme(id) {
    if (window.confirm('Tem certeza que você quer deletar?')){
      this.restApi.deleteFilme(id).subscribe(data => {
        this.loadFilmes()
      })
    }
  }  

}