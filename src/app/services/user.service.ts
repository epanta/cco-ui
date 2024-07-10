import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsuarioForm} from "../models/UsuarioForm";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api'; // URL para o seu endpoint de API

  constructor(private http: HttpClient) {}


  listarUsuarios(page: number, size: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get(
      `${this.apiUrl}/listar-usuarios`, {params}
    );
  }

  alterarSituacao(id: number, ativo: boolean): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.put(
      `${this.apiUrl}/situacao/${id}/${ativo}`,
      {},
      { headers: headers }
    );
  }

  buscarUsuario(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(
      `${this.apiUrl}/${id}`
    );
  }

  atualizarUsuario(id: number, usuario: any ): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.put(
      `${this.apiUrl}/situacao/${id}`,
      {usuario},
      { headers: headers }
    );
  }

}
