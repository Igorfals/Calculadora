import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  valor1: any = ""
  valor2: any = ""
  tipo: any = null
  constructor() { }

  ngOnInit(): void {
  }

  receberValor(valor: string) {
    this.play()
    if (this.tipo) {
      let verifica = this.valor2.includes(".")
      if (verifica) {
        if (valor == ".") {
          console.log("Já existe ponto.")
        } else {
          this.valor2 = this.valor2 + valor
        }
      } else {
        this.valor2 = this.valor2 + valor
      }
      
    } else {
      let verifica = this.valor1.includes(".")
      if (verifica) {
        if (valor == ".") {
          console.log("Já existe ponto.")
        } else {
          this.valor1 = this.valor1 + valor
        }
      } else {
        this.valor1 = this.valor1 + valor
      }
    }
  }

  receberTipo(valor: string) {
    this.play()
    if (this.tipo){
      if(this.valor2!=''){
        this.calcularResultado()
      }
      this.tipo = valor
    } else {
      this.tipo = valor
    }
    
  }

  calcularResultado() {
    this.play()
    if (this.valor1 != "" && this.valor2 != "" ) {

      if (this.tipo == "+") {
        this.valor1 = parseFloat(this.valor1) + parseFloat(this.valor2)
        this.valor2 = ""
        this.tipo = null
      }
      if (this.tipo == "-") {
        this.valor1 = parseFloat(this.valor1) - parseFloat(this.valor2)
        this.valor2 = ""
        this.tipo = null
      }
      if (this.tipo == "x") {
        this.valor1 = parseFloat(this.valor1) * parseFloat(this.valor2)
        this.valor2 = ""
        this.tipo = null
      }
      if (this.tipo == "/") {
        this.valor1 = parseFloat(this.valor1) / parseFloat(this.valor2)
        this.valor2 = ""
        this.tipo = null
      }
    }
  }
  limparCalculadora(){
    this.play()
    this.valor1 = ""
    this.valor2 = ""
    this.tipo = null
  }
  play() {
    var audio = new Audio('assets/click.mp3');
audio.play();
  }
}
