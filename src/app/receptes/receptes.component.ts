import { Component, OnInit } from '@angular/core';
import { RECEPTES, COMENTARIS, Comentaris} from '../receptes';
import * as $ from 'jquery';

@Component({
  selector: 'app-receptes',
  templateUrl: './receptes.component.html',
  styleUrls: ['./receptes.component.css']
})
export class ReceptesComponent implements OnInit {
   f = new Date();
   data = this.f.getDate() + "/" + ( this.f.getMonth() +1) + "/" +  this.f.getFullYear();


  recept = RECEPTES;
  coment = COMENTARIS;

  selec='';
  buscadorReceptes ='';
  selector='';
  comenta:Comentaris = new Comentaris;
  constructor() { }

  crearComentari(){
    this.coment.push(this.comenta);
    this.comenta = new Comentaris;
    
  }
 
  onChange(deviceValue){
    this.selec=deviceValue;
  }
  ngOnInit(): void {
    this.selector = "Tria una opció";
    this.comenta.num_estrelles= 5;
    //this.comenta.id_recepta = 1;

   /* $(".nice").change(function(){
      alert($('select[class=ejemplo3]').val());
      $('.valor3').val($(this).val());
});*/
  $("#target").val($("#target option:first").val());

  
  }

}
