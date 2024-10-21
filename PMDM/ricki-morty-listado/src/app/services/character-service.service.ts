import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterListResponse } from '../interfaces/cahracter-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(private http: HttpClient) { 

  }

  getCharacterList(): Observable<CharacterListResponse> {
    return this.http.get<CharacterListResponse>('https://rickandmortyapi.com/api/character');
  }
}
