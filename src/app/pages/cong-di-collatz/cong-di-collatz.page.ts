import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cong-di-collatz',
  templateUrl: './cong-di-collatz.page.html',
  styleUrls: ['./cong-di-collatz.page.scss'],
})
export class CongDiCollatzPage implements OnInit {
i:number;
j:number;
maxLengthCycle:number[] = [];
isOperationFinished:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  swapNumber(){
    let temp = this.i;
    this.i = this.j;
    this.j = temp;
    return [this.i, this.j]
  }

  operation(oneNumber:number){
    this.isOperationFinished = false;
    const oneArray:number[] = [oneNumber];
    while (oneNumber > 1){ 
        (oneNumber % 2 === 0) ? oneNumber = oneNumber / 2 : oneNumber = (oneNumber * 3) + 1;
        oneArray.push(oneNumber);
    }
    return oneArray;
  }
  calculate(){
    this.maxLengthCycle = [];
    if((this.i > 0 && this.i < 10000) && (this.j > 0 && this.j < 10000)){
      if (this.i > this.j){
      const [firstNumber, secondNumber] = this.swapNumber();                  //destrutturazione
      this.i = firstNumber;
      this.j = secondNumber;
      }

      for (let x = this.i; x <= this.j; x++){
      const lengthCycle = this.operation(x);
      if (lengthCycle.length > this.maxLengthCycle.length){
          this.maxLengthCycle = lengthCycle;
      }
      }
    }
    return this.isOperationFinished = true;
  }
}