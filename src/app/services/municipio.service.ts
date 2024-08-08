import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {MunicipioForm} from "../models/MunicipioForm";

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(public http: HttpClient) {
  }

  getMunicipiosCadastrados(page: number, size: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get(
      `${environment.urlApi}/municipios`, {params}
    );
  }

  incluirMunicipio(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(`${environment.urlApi}/municipios`, data);
  }

  deleteMunicipio(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.delete(`${environment.urlApi}/municipios/${id}`, {headers});
  }

  atualizarMunicipio(id: number , data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});

      let municipioDTO: MunicipioForm  = {
        id: data.id,
        codigo:data.codigo,
        sigla:data.sigla,
        municipio:data.municipio,
        descricao: data.descricao,
      }

    return this.http.put(`${environment.urlApi}/municipios/${id}`, municipioDTO, {headers: headers} );
  }

  buscarPorNome(selectedValue: any): Observable<any>{
    return this.http.get(`${environment.urlApi}/municipio/search/${selectedValue}`)
  }
}
