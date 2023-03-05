import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url = environment.API_URL + '/cliente';

  constructor(private http: HttpClient,  private authService: AuthService) { 
  }
  
  updateUser(user: User): Observable<User> {
    
    return this.http.put<User>(`${this.url}/update/${user.id}`, user, this.httpOptions);
  }
}
