import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent{

  subText = '';
  mainText = '';
  operandA!: number;
  operandB!: number;
  operator = '';
  calculation = '';
  answers = false;
  operatorSet = false;

  constructor(private data:DataService) {}

  keyPress(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key ==='+') {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')
      {
        this.operatorSet = true;
      } 
      if ((this.operatorSet) || (this.mainText === '')) {
        return;
      }

      this.operandA = parseFloat(this.mainText);
      this.operator = key;
      this.operatorSet = true;
    }
    this.mainText += key;
  }

  clear() {
    this.mainText = '';
    this.subText = '';
    this.operatorSet = false;
  }

  getAnswer() {
    this.calculation = this.mainText;
    this.operandB = parseFloat(this.mainText.split(this.operator)[1]);
    if (this.operator === '/') {
      this.subText = this.mainText;
      this.mainText = (this.operandA / this.operandB).toString();
      this.subText = this.calculation;

      if (this.mainText.length > 9) {
        this.mainText = this.mainText.substring(0, 9);
      }
    } else if (this.operator === 'x') {
      this.subText = this.mainText;
      this.mainText = (this.operandA * this.operandB).toString();
      this.subText = this.calculation;

      if (this.mainText.length > 9) {
        this.mainText = 'ERROR!';
        this.subText = 'Number is to big!';
      }
    } else if (this.operator === '-') {
      this.subText = this.mainText;
      this.mainText = (this.operandA - this.operandB).toString();
      this.subText = this.calculation;

    } else if (this.operator === '+') {
      this.subText = this.mainText;
      this.mainText = (this.operandA + this.operandB).toString();
      this.subText = this.calculation;

      if (this.mainText.length > 9) {
        this.mainText = 'ERROR!';
        this.subText = 'Number is to big!';
      }
    } else {
      this.subText = 'Error: Invalid Operation';
    }
    //  this.answers = true;

  }

}
