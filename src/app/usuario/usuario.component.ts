import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  cities1: SelectItem[];
    
  cities2: City[];

  selectedCity1: City;
  
  selectedCity2: City;
  value: Date;


  text: string;
  results: string[ ];
  mylookupservice: any;
  search(event) {
    this.mylookupservice.getResults(event.query).then(data => {
        this.results = data;
    });
}
handleDropdown(event) {
  //event.query = current value in input field
}

  constructor() { 
    this.cities1 = [
      {label:'Select City', value:null},
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
  ];
  
  //An array of cities
  this.cities2 = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
}
   

  ngOnInit() {
  }

}
