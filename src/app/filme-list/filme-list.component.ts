import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Validators } from '@angular/forms';
import { Filme } from '../shared/filme';

@Component({
  selector: 'app-filmes-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmesListComponent implements OnInit {

  selectedValues: string[] = [];
  Filme: any = [];
  selectedFilme: Filme;

  constructor(
    public restApi: RestApiService
  ) { }

  onSelect(filme: Filme): void {
    this.selectedFilme = filme;
  }

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
     
          window.alert('O produto foi removido com sucesso!');
        
      
        
      })
    }
  }  

}