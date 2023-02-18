import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'any',
  
})
export class ConexionService {
  //direccion donde buscar las cosas (la que llamas no es la de angular) pides datos al servidor
  API_URL: string = "http://localhost:8080/";

  //injectar el http
  constructor(private http: HttpClient) { }

  //aqui llegara categorias o lo que sea y será localhost:8080/categorias
  leerApi(url:string): Observable<any>{
    return this.http.get(this.API_URL+url).pipe(share());
  }

  leerUnaApi(url:string): Observable<any>{
    return this.http.get(this.API_URL+url).pipe(share());
  }

  postApi(url:string, dto:any): Observable<any>{
    return this.http.post(this.API_URL+url,dto).pipe(share());
  }

  putApi(url:string, dto:any): Observable<any>{
    return this.http.put(this.API_URL+url,dto).pipe(share());
  }

  deleteApi(url:string): Observable<any>{
    return this.http.delete(this.API_URL+url).pipe(share());
  }


}
