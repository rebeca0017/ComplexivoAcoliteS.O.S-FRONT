import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { AuthLocalStorage } from './auth-local-storage';
import { AuthValidator } from './auth-validator';
import { Router } from '@angular/router';
import { AuthTokenDecoder } from './auth-token-decoder';

const API_URL = environment.API_URL + '/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private authLocalStorage: AuthLocalStorage,
    private authValidator: AuthValidator,
    private authTokenDecoder: AuthTokenDecoder
  ) {}

  isAuthenticated(): boolean {
    return this.authValidator.isTokenValid(
      this.authLocalStorage.getAccessToken()
    );
  }

  isAuthorized(permissions: string[]): boolean {
    const token = this.authLocalStorage.getAccessToken();
    return this.authValidator.hasPermission(token, permissions);
  }

  hasRole(role:string): boolean {
    return this.authValidator.hasRole(
      this.authLocalStorage.getAccessToken(),role
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${API_URL}/login`, { email, password }, this.httpOptions)
      .pipe(
        map((response) => {
          this.authLocalStorage.setAccessToken(response.data.accessToken);
          return response;
        }),
        catchError(this.handleError<any>('login'))
      );
  }

  register(name: string, email: string, role:number, password: string): Observable<any> {
    return this.http
      .post<any>(
        `${API_URL}/register`,
        { name, email, role, password },
        this.httpOptions
      );
  }

  logout(): Observable<boolean> {
    try {
      this.authLocalStorage.clear();
      return of(true);
    } catch (error) {
      return of(false);
    }
  }

  getUser(): Observable<any> {
    const token = this.authLocalStorage.getAccessToken();
    if (!this.authValidator.isTokenValid(token)) {
      return of(null);
    }
    const user = this.authTokenDecoder.decodeToken(token).user;
    return of(user);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
