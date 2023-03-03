import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../../../models/vehiculo';
import { AuthService } from '../../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getVehicles(): Observable<{ vehicles: Vehiculo[] }> {
    return this.http.get<{ vehicles: Vehiculo[] }>(`${this.baseUrl}vehiculos`);
  }

}