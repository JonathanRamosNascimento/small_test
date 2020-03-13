import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarCepService {

  constructor(
    private http: HttpClient
  ) { }

  buscarCep(cep: number) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
