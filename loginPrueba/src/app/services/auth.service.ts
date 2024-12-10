import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateRequestTokenResponse } from '../models/create-request-token.interface';
import { Observable } from 'rxjs';

const API_KEY = '05e17ea68b0a29c92de23f76cc1cff22';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createRequestToken(): Observable<CreateRequestTokenResponse> {
    return this.http.get<CreateRequestTokenResponse>(`https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`);
  }
}