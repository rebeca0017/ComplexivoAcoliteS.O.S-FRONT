import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiUrl = 'http://127.0.0.1:8000/api/cliente/dashboard';

  constructor(private http: HttpClient) { }

  getCliente() {
    return this.http.get(this.apiUrl);

   
  }
}
