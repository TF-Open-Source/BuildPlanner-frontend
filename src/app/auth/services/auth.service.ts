import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string, password: string }) {
    return this.http.post<{ token: string, userType: string, userId: string }>(
      `${this.apiUrl}/login`,
      credentials
    );
  }

  register(user: { email: string, password: string, userType: string }) {
    return this.http.post(
      `${this.apiUrl}/registro`,
      user
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  storeSession(token: string, userType: string, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userType', userType);
    localStorage.setItem('userId', userId);
  }

  getUserType() {
    return localStorage.getItem('userType');
  }


  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}
