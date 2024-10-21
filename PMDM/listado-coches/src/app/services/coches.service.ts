import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CochesListRespone } from '../interfaces/coche.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  constructor(private http: HttpClient) { 

  }

  getCochesList(): Observable<CochesListRespone> {
    return this.http.get<CochesListRespone>('https://swapi.dev/api/vehicles');
  }
}
