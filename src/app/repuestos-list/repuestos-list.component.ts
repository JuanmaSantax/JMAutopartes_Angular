import { Component } from '@angular/core';
import { Repuesto } from './Repuesto';  /* Importa el interfaz repuesto*/
import { RepuestosCartService } from '../services/repuestos-cart.service';
import { RepuestoDataService } from '../services/repuesto-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repuestos-list',
  templateUrl: './repuestos-list.component.html',
  styleUrl: './repuestos-list.component.scss'
})

export class RepuestosListComponent {
   repuestos: Repuesto[] = [];
   
  
  constructor(
    private cart: RepuestosCartService,  // servicios inyectados 
    private repuestoDataService: RepuestoDataService){ 
  } 
  
  ngOnInit():void{
    
    this.cart.repuestos.subscribe(repuestos => this.repuestos = repuestos);
  }
  
  addToCart(repuesto: Repuesto): void{
    this.cart.addToCart(repuesto);
    repuesto.stock -= repuesto.quantity; // esto hace que cuando le doy a comprar se reste del stock la cantidad comprada 
    repuesto.quantity = 0;
  }

  quantityLimit(m:String){
    alert(m);
  }

  ngOnDrestroy(){}

}




