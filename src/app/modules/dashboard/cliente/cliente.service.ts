import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';


@Injectable({
  providedIn: 'root'
 
})

export class ClienteService {
  private headers = new HttpHeaders();

  constructor(private http: HttpClient,  private authService: AuthService) { 
  }
  
  updateUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    return this.http.put<any>('http://127.0.0.1:8000/api/cliente/update/' + user.id, user);
  }
}
