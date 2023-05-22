import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  constructor(private http: HttpClient) { }

  private urlApi: string = 'http://localhost:3000/suscripciones';

  getAllSubscriptions(): Observable <any> {
    return this.http.get(this.urlApi);
  }

  getSubscription(id: number) {
    return this.http.get(`${this.urlApi}/${id}`);
  }

}
