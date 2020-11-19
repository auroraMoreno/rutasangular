import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrls: ['./tablamultiplicar.component.css']
})
export class TablamultiplicarComponent implements OnInit {

  //public multiplicacion: number;
  public numeros: Array<number>;
  public numero: number;

  @ViewChild("numero1") numero1: ElementRef;

  multiplicarNumeros(){
    var num = parseInt(this.numero1.nativeElement.value);
    this.numero = num;
    for(var i=1; i <=10; i++){
      var multiplicacion = num * i;
      this.numeros.push(multiplicacion);
    }
  }

  constructor() { 
      this.numeros = [];
  }

  ngOnInit(): void {
  }

}
