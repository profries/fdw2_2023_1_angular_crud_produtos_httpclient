import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {
  baseApi = 'http://localhost:3001/api/produtos';
  constructor(private http:HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseApi);
  }

  buscarPorId(id: number): Observable<Produto> {
    const uri = `${this.baseApi}/${id}`;    
    return this.http.get<Produto>(uri);
  }

  inserir(produto: Produto): Observable<Produto> {
    return this.http.post(this.baseApi, produto, httpOptions);
  }
}
