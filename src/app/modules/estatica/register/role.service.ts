import { Injectable } from '@angular/core';
import { Role } from 'src/app/models/role';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url = environment.API_URL + '/roles';

  // GET /roles
  public getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.url);
  }
}
