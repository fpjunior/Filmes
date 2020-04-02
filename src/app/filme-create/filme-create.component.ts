import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { Http } from '@angular/http';
import { SelectItem } from 'primeng/api';



@Component({
  selector: 'app-filme-create',
  templateUrl: './filme-create.component.html',
  styleUrls: ['./filme-create.component.css']
})
export class FilmeCreateComponent implements OnInit {

  

// valores das estrelas 
  val1: number;

  val2: number = 5;

  val3: number;

  val4: number = 5;

  val5: number;

  msg: string;

  handleRate(event) {
      this.msg = "You have rated " + event.value;
  }

  handleCancel(event) {
      this.msg = "Rating Cancelled";
  }

  val: number;
 
  countries: any[];

    selectedCountry: any;

  noSpecial: RegExp = /^[^<>*!]+$/
  
  blockSpecial: RegExp = /^[^<>*!]+$/ 
    
  blockSpace: RegExp = /[^\s]/; 
  
  ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; 
  
  cc: string; 
 
  @Input() filmeDetails = {  }
  

  constructor(
   
    
    // valores das bandeiras 
    public restApi: RestApiService, 
    public router: Router
  ) {
    this.countries = [
      {name: 'USA', flag: 'usa.png'},
      {name: 'Germany', flag: 'germany.png'},
      {name: 'Japan', flag: 'japan.png'}
  ];
}

  
  ngOnInit() {
    
   }
   showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }
 
  addFilmes(dataFilme) {
    this.restApi.createFilme(this.filmeDetails).subscribe((data: {}) => {
      this.router.navigate(['/filmes-list'])
    })
  }

}