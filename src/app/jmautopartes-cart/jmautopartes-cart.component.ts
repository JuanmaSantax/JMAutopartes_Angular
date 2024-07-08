import { Component } from '@angular/core';
import { RepuestosCartService } from '../services/repuestos-cart.service';
import { Repuesto } from '../repuestos-list/Repuesto';
import { Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-jmautopartes-cart',
  templateUrl: './jmautopartes-cart.component.html',
  styleUrl: './jmautopartes-cart.component.scss'
})
export class JMAutopartesCartComponent {

  cartShop$: Observable<Repuesto[]>;
  totalPrice$!: Observable<number>;

  constructor(private cart: RepuestosCartService ){
    //cart.cartShop.subscribe(observable=> this.cartShop = observable); // observable es un nombre de variable
    this.cartShop$ = cart.cartShop.asObservable(); // esta es una version pipe de lo de arriba 
  } 

  ngOnInit(){
    this.totalPrice$ = combineLatest([this.cartShop$]).pipe(
      map(([repuestos]) => {
        return repuestos.reduce((total, repuesto) => total + (repuesto.quantity * repuesto.price), 0);
      })
    );
  }
  removeFromCart(repuesto: Repuesto){
    this.cart.removeFromCart(repuesto);
  }

  clearCart() {
    this.cart.clearCart(); // Llamar al método clearCart del servicio
    this.cartShop$ = this.cart.cartShop.asObservable(); // Actualizar el observable del carrito
  }

  /*backToList(repuesto : Repuesto){
    this.cart.backToList(repuesto);
  } */

    impuestoCalculator(cod: number){
     return  this.cart.impuestoCalculator(cod);  
    }
}  
