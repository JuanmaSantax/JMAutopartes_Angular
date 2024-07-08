import { Component, Input, Output, input, EventEmitter } from '@angular/core';
import { Repuesto } from '../repuestos-list/Repuesto';



@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent {
  constructor () {}; 
  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  quantityLimit: EventEmitter<String> = new EventEmitter<String>();


  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.quantityLimit.emit("Se alcanzo el maximo")
    }
    
  }

  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    } 
  }

  changeQuantity(event:any): void{
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }

}
