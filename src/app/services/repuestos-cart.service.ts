import { Injectable } from '@angular/core';
import { Repuesto } from '../repuestos-list/Repuesto';
import { BehaviorSubject } from 'rxjs';
import { RepuestoDataService } from './repuesto-data.service';

@Injectable({
  providedIn: 'root'
})
export class RepuestosCartService {
  private _repuestos: Repuesto[] = [];
  repuestos: BehaviorSubject<Repuesto[]> = new BehaviorSubject(this._repuestos);

  private _cartShop: Repuesto [] = []; // variable privada para poder usar ese mismo nombre de la variable observada con un Behavior
  cartShop: BehaviorSubject<Repuesto[]> = new BehaviorSubject(this._cartShop); // sirve para encapsular una variable

  constructor(private repuestoDataService: RepuestoDataService) { 
    this.repuestoDataService.getAll().subscribe(repuestos =>{
      this._repuestos = repuestos;
      this.repuestos.next(this._repuestos);
    })
   }

  addToCart(repuesto : Repuesto){
    let item: Repuesto | undefined = this._cartShop.find((v1) =>v1.cod == repuesto.cod)//busca si hay algun repuesto dentro de la lista que tenga el mismo nombre 
    if(!item){
      this._cartShop.push({... repuesto}); // ...repuesto hace una copia del objeto
    }else{
      item.quantity += repuesto.quantity; //item es de tipo repuesto, entonces aca le estoy diciendo que si ya esta el repuesto en el carrito
    }                                         // no sume el producto de vuelta si no que le sume las cantidades compradas 
    this.cartShop.next(this._cartShop); // aca se emite mi variable privada 
    this.updateStock(repuesto.cod, - repuesto.quantity);
  }

  removeFromCart(repuesto: Repuesto) {
    const index = this._cartShop.findIndex((item) => item.cod === repuesto.cod);
    if (index > -1) {
      const item = this._cartShop[index];
      item.quantity -= repuesto.quantity;
      if (item.quantity <= 0) {
        this._cartShop.splice(index, 1);
      }
      this.updateStock(repuesto.cod, repuesto.quantity);
      this.cartShop.next(this._cartShop);
      
    }
  }

  
  public updateStock(cod: number, quantity: number): void {
    const repuestoIndex = this._repuestos.findIndex(item => item.cod === cod);
    if (repuestoIndex !== -1) {
       this._repuestos[repuestoIndex] = {...this._repuestos[repuestoIndex],
        stock: this._repuestos[repuestoIndex].stock + quantity
       }; // Ajusta el stock en la lista original de repuestos
    }
    this.repuestos.next([...this._repuestos]);
  }

  clearCart(){
    this._cartShop= [];
    this.cartShop.next(this._cartShop);
  }

  impuestoCalculator(cod: number){
    const repuesto = this._cartShop.find(item => item.cod === cod);
    if(repuesto){
      if(repuesto.nationality != 'Argentina'){
        return 1.35;
      }else{
        return 1;
      }
    }else{
      return 1;
    }
  }

}
