import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  base_url: string = "http://167.172.139.93:3401/";

  constructor(private http: HttpClient) { }
  getPokemons() {
    return this.http.get(this.base_url + 'getPokemons/?limit=12?offset=0');
  }
  getPokemonId(id: any) {
    return this.http.get(this.base_url + `getPokemonId/?id=${id}`);
  }
}

