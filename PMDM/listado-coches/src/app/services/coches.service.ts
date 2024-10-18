import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coche } from '../interfaces/coche.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  constructor(private http: HttpClient) { 

  }

  getCochesList(): Observable<Coche []> {
    return this.http.get<Coche[]>('https://swapi.dev/api/vehicles');
  }
}
