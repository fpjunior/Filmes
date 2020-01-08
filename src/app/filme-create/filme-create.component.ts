import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-filme-create',
  templateUrl: './filme-create.component.html',
  styleUrls: ['./filme-create.component.css']
})
export class FilmeCreateComponent implements OnInit {

  @Input() filmeDetails = {  }

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  
  ngOnInit() { }
 
  addFilmes(dataFilme) {
    this.restApi.createFilme(this.filmeDetails).subscribe((data: {}) => {
      this.router.navigate(['/filmes-list'])
    })
  }

}