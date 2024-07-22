import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificacaoServiceConfig {
  private apiUrl = 'http://localhost:8080/api'; // URL para o seu endpoint de API

  constructor(private http: HttpClient) {}

  getNotificacoesConfiguradas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar-configs`);
  }

  alterarSituacao(data: any) {
    var url = this.apiUrl + '/atualizar-configs';
    this.http.post(url, data).subscribe(
      response => {
        console.log('POST success:', response);
      },
      error => {
        console.error('POST error:', error);
      }
    );


    /*const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    var url = this.apiUrl + '/atualizar-configs';

    console.log('===========', url, data, headers);
    let dado = this.http
      .post(url, data, { headers })
      .pipe(catchError(this.handleError));

    console.log('DADO', dado);*/
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Um erro ocorreu: ${error.error.message}`;
    } else {
      errorMessage =
        `O servidor retornou o código ${error.status}, ` +
        `o corpo da resposta foi: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
