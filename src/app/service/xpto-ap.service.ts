import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { throwError, Observable } from 'rxjs';
import {retry, catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class XptoAPService {

  apiURL : string = "http://localhost:8080/api/clientes";

  constructor(private httpClient: HttpClient ) { }

  

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }

    getClientes(): Observable<Cliente[]> {
      return this.httpClient.get<Cliente[]>(this.apiURL)
      .pipe(retry(1),
      catchError(this.handleError))
      }
      createCliente(clie: Cliente): Observable<Cliente> {
        return this.httpClient.post<Cliente>(`${this.apiURL}`, clie)
        .pipe(retry(1),
        catchError(this.handleError));
        }
}

