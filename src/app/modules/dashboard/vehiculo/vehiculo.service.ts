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

  createVehicle(vehiculo: Vehiculo): Observable<Vehiculo> {
    
    return this.http.post<Vehiculo>(`${this.url}/create`, vehiculo, this.httpOptions);
  }
}