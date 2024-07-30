import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsuarioForm} from "../models/UsuarioForm";

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  private apiUrl = 'http://localhost:8080/api'; // URL para o seu endpoint de API

  constructor(private http: HttpClient) {}

  listarNotificacoes(page: number, size: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get(
      `${this.apiUrl}/listar-notificacoes`, {params}
    );
    
  }

  alterarSituacao(id: number, status: boolean): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.put(
      `${this.apiUrl}/notificacao/${id}/${status}`,
      {},
      { headers: headers }
    );
  }

}
