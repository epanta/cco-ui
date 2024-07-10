import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsuarioForm} from "../models/UsuarioForm";

@Injectable({
  providedIn: 'root'
})
export class ComunicacaoService {
  private apiUrl = 'http://localhost:8080/api'; // URL para o seu endpoint de API

  constructor(private http: HttpClient) {}

  getComunicacao(page: number, size: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get(
      `${this.apiUrl}/listar-comunicacoes`, {params}
    );
  }

}
