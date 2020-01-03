import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-filme-details',
  templateUrl: './filme-edit.component.html',
  styleUrls: ['./filme-edit.component.css']
})

export class FilmeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  filmeData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    
    this.restApi.getFilme(this.id).subscribe((data: {}) => {
      
      this.filmeData = data;
     
    })
  }

  // Atualiza dados do filme
  updateFilme() {
    if(window.confirm('Tem certeza que você quer atualizar?')){
      this.restApi.updateFilme(this.id, this.filmeData).subscribe(data => {
        this.router.navigate(['/filmes-list'])
      })
    }
  }

}