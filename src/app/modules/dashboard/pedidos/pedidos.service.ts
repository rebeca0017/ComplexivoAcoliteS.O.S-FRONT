import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../../../models/pedido';
import { AuthService } from '../../../auth/auth.service';
import { environment } from 'src/environments/environment';
import { Vehiculo } from 'src/app/models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private urlV = environment.API_URL + '/vehiculos';
  private url = environment.API_URL + '/mecanico/pedidos';

  constructor(private http: HttpClient, private authService: AuthService) { }

   //obtener los vehiculos para mostarlos en el select 
  getVehicles(): Observable<Vehiculo[] > {
    return this.http.get<Vehiculo[]>(`${this.urlV}`);
  }

  getOrders(): Observable<Pedido[] > {
    return this.http.get<Pedido[]>(`${this.url}`);
  }

  createPedido(pedido: Pedido): Observable<Pedido> {
    
    return this.http.post<Pedido>(`${this.url}/create`, pedido, this.httpOptions);
  }
}