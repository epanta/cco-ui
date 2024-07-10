import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsuarioForm} from "../models/UsuarioForm";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api'; // URL para o seu endpoint de API

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'senha':password });
    return this.http.post(
      `${this.apiUrl}/auth`,
      { matriculaEmail: username },
      { headers }
    );
  }

  createUsuarioSemPermissao(usuario: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(
      `${this.apiUrl}/sem-permissao`,
      usuario,
      { headers }
    );
  }

}
