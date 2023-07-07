import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {
  baseApi = 'http://localhost:3001/api/produtos';
  constructor(private http:HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseApi);
  }
}
