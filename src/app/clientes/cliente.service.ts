import { Injectable } from '@angular/core';
import { Clientes } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor() { }

   getClientes(): Observable<Cliente[]> {
    return of(Clientes);
  }
}


