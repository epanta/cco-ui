import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsuarioForm} from "../models/UsuarioForm";

@Injectable({
  providedIn: 'root'
})
export class ParametroService {
  private apiUrl = 'http://localhost:8080/api'; // URL para o seu endpoint de API

  constructor(private http: HttpClient) {}

  getParametros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar-parametros`);
  }

  getOpcoesByParametroId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}/opcoes`);
  }
}
