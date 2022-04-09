import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter=0
  counterUp(){
    this.counter++
  }
  counterDown(){
    this.counter--
  }
}
