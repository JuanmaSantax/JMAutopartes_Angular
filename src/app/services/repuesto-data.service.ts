import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Repuesto } from '../repuestos-list/Repuesto';


const URL = 'https://apimocha.com/jmautopartes/repuestos';

@Injectable({
  providedIn: 'root'
})
export class RepuestoDataService {
  

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Repuesto[]>{ // http es una variable, a la q se le puede hacer .get, .post etc
    return this.http.get<Repuesto[]>(URL) //devuelve observable de la respuesta
     .pipe(//   .pipe()hace cosas en el medio antes de mandar los cambios 
      tap((repuestos: Repuesto[]) => repuestos.forEach(repuesto => repuesto.quantity = 0))//funcion que hace llegar lo que emite el observable   
     );

  }
  
  
        
}
