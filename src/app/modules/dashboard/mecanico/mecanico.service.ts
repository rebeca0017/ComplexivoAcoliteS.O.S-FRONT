import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { Pedido } from 'src/app/models/pedido';
import { environment } from 'src/environments/environment';
import { Vehiculo } from 'src/app/models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private urlV = environment.API_URL + '/vehiculos';
  private url = environment.API_URL + '/pedidos';


  constructor(private http: HttpClient,  private authService: AuthService) { 
  }
 

  getOrders(): Observable<Pedido[] > {
    return this.http.get<Pedido[]>(`${this.url}`);
  }
  
  updateUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    return this.http.put<any>('http://127.0.0.1:8000/api/mecanico/update/' + user.id, user);
  }

  aceptarPedido(idPedido: number, idMecanico: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    const body = { idMecanico: idMecanico };
    return this.http.put<any>(`http://127.0.0.1:8000/api/mecanico/${idPedido}/aceptar`, body, { headers: headers });
  }
}
