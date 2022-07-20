import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

constructor (){};

results: string[] = [];

add(result: any) {
  this.results.push(result);
  this.add('Results were added!')
  return result;
}

clean() {
  this.results = [];
}
  // constructor() { }
}
