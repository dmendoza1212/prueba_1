import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username: string = '';
  private password: string = ''; // También puedes inicializar la propiedad 'password' aquí
  private apiUrl =
    'http://localhost:8085/proyecto-reportes/api/reporte-riesgo/12-01-2019';

  getTablaData(): Observable<any[]> {
    let url = this.apiUrl;

    // Agregar datos de autenticación básica en el encabezado de la solicitud
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' + btoa('user:2fc8f89e-fc04-4958-bfb4-0008b1fe6607'),
      // Reemplaza 'username' y 'password' con tus credenciales 1e694cf7-61a9-4764-af61-26217a10eda9
    });
    return this.http.get<any[]>(url, { headers });
  }

  setCredentials(username: string, password: string): void {
    this.username = username;
    this.password = password;
  }

  getCredentials(): { username: string; password: string } {
    return { username: this.username, password: this.password };
  }

  constructor(private http: HttpClient) { }

  private isAuthenticated: boolean = false;

  login(username: string, password: string): boolean {
    // Aquí verificaríamos las credenciales con un servidor o una fuente de datos
    // Por ahora, utilizaremos credenciales fijas para fines de demostración
    if (username === 'watson' && password === '12345678') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
