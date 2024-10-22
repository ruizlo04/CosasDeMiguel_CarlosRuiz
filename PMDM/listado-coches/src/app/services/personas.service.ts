import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonasListResponse } from '../interfaces/persona.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { 

  }

  getPersonasList(): Observable<PersonasListResponse> {
    return this.http.get<PersonasListResponse>('https://swapi.dev/api/people');
  }

}
