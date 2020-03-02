import { Component, OnInit } from '@angular/core';
import { Receptes, RECEPTES} from '../receptes';


@Component({
  selector: 'app-llista-receptes',
  templateUrl: './llista-receptes.component.html',
  styleUrls: ['./llista-receptes.component.css']
})
export class LlistaReceptesComponent implements OnInit {
  id = Date.now(); 
  recept = RECEPTES;
  recepta:Receptes = new Receptes();
  constructor() {
  }
  
  crearRecepta(){
    this.recepta.id_recepta=this.id;
    this.recept.push(this.recepta);
    this.recepta = new Receptes();
    this.id = Date.now(); 
  }
  ngOnInit() {
  }

}
