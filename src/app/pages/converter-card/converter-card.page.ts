import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter-card',
  templateUrl: './converter-card.page.html',
  styleUrls: ['./converter-card.page.scss'],
})
export class ConverterCardPage implements OnInit {
unitaUno: string = "";
unitaDue: string = "";
misuraUno: number = 0;
misuraDue: number = 0;
  constructor() { }

  ngOnInit() {
  }
  convTemp(){
    if(this.unitaUno === "C"){
      if(this.unitaDue === "F") return this.misuraDue = (this.misuraUno * 9/5) + 32;
      if(this.unitaDue === "K") return this.misuraDue = this.misuraUno - (-273.15);
    }
    if(this.unitaUno === "F"){
      if(this.unitaDue === "C") return this.misuraDue = (this.misuraUno -32) * 5 / 9;
      if(this.unitaDue === "K") return this.misuraDue = (this.misuraUno - 32) * 5/9 - (-273.15); 
    }
    if(this.unitaUno === "K"){
      if(this.unitaDue === "F") return this.misuraDue = (this.misuraUno - 273.15) * 9/5 + 32;
      if(this.unitaDue === "C") return this.misuraDue = this.misuraUno  - 273.15;
    }
  }


  // convTempCeToFa(){
  //   if (this.unitaUno === "C"){ 
  //     this.unitaDue = "F"  
  //     return this.misuraDue = (this.misuraUno * 9 / 5) +32;
  //   } 
  //   this.unitaDue = "C"
  //   return this.misuraDue = (this.misuraUno -32) * 5 / 9;
  // }
  // convTempFaToCe(){
  //   if (this.unitaDue === "C"){ 
  //     this.unitaUno = "F"  
  //     return this.misuraUno = (this.misuraDue * 9 / 5) +32;
  //   } 
  //   this.unitaUno = "C"
  //   return this.misuraUno = (this.misuraDue -32) * 5 / 9;
  // }
  // convDistKmToMi(){
  //   if (this.unitaUno === "Km"){ 
  //     this.unitaDue = "Mi"  
  //     return this.misuraDue = (this.misuraUno / 1.6);
  //   } 
  //   this.unitaDue = "Km"
  //   return this.misuraDue = (this.misuraUno * 1.6);
  // }
  // convDistMiToKm(){
  //   if (this.unitaUno === "Mi"){ 
  //     this.unitaDue = "Km"  
  //     return this.misuraDue = (this.misuraUno * 1.6);
  //   } 
  //   this.unitaDue = "Mi"
  //   return this.misuraDue = (this.misuraUno / 1.6);
  // }
}