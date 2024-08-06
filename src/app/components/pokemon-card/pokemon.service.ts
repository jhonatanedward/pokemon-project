import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(pokemon: string): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/pokemon/${pokemon}`)
  }
}