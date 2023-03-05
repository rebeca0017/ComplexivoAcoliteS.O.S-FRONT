import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../../../models/vehiculo';
import { AuthService } from '../../../auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private url = environment.API_URL + '/vehiculos';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getVehicles(): Observable<Vehiculo[] > {
    return this.http.get<Vehiculo[]>(`${this.url}`);
  }

  getVehicle(id:number): Observable<Vehiculo[] > {
    return this.http.get<Vehiculo[]>(`${this.url}/${id}`);
  }

  createVehicle(vehiculo: Vehiculo): Observable<Vehiculo> {
    
    return this.http.post<Vehiculo>(`${this.url}/create`, vehiculo, this.httpOptions);
  }

  updateVehicle(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.put<Vehiculo>(`${this.url}/update/${vehiculo.id}`, vehiculo, this.httpOptions);
}
}