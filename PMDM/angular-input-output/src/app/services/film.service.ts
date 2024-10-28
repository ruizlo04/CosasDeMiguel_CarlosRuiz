import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmListResponse } from '../models/film.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getAllFilms(): Observable<FilmListResponse> {
    return this.http.get<FilmListResponse>('https://swapi.dev/api/films/');
  }
}
