import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from './usuario.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url ="http://127.0.0.1:8000/api/v1/login/";

  currentUserSubject: BehaviorSubject<Usuario>;
  currentUser: Observable<Usuario>;
  public loggedIn:any;
  constructor(private http:HttpClient) {
    console.log("Servicio de autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // login(usuario: Usuario): Observable<any> {
  //   return this.http.post<any>(this.url, usuario).pipe(map(data => {
  //   localStorage.setItem('currentUser', JSON.stringify(data));

  //   this.currentUserSubject.next(data);
  //   this.loggedIn.next(true);
  //   return data;
  //   }));
  // }

  login(usuario: any): Observable<any> {
    const body = {
      email: usuario.email,
      password: usuario.password1
    };
    
    return this.http.post<any>(this.url, body).pipe(
      map(data => {
        console.log(data)
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this.loggedIn.next(true);

        const idUsuario = data.id;
        const rutinas = data.rutinas;

        console.log("id user => ", idUsuario);
        console.log("rutinas => ", rutinas);

        return data;
      })
    );
  }

  logout(): void{
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  }

  get usuarioAutenticado(): Usuario {
    return this.currentUserSubject.value;
  }

  get estarAutenticado(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
