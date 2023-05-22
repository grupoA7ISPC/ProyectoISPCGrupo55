import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Suscripcion}  from '../models/suscripcion'

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  constructor(private http: HttpClient) { }

  private urlApi: string = 'http://localhost:3000/suscripciones';

  getAllSubscriptions(): Observable <any> {
    return this.http.get<Suscripcion[]>(this.urlApi);
  }

  getSubscription(id: number): Observable <any> {
    return this.http.get<Suscripcion[]>(`${this.urlApi}/${id}`);
  }

}
