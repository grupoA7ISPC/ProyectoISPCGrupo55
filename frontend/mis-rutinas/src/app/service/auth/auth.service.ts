import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario, UsuarioLoginDTO } from './usuario.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url ="http://127.0.0.1:8000/api/v1/login/";

  currentUserSubject: BehaviorSubject<Usuario>;
  currentUser: Observable<Usuario>;
  public loggedIn:any;
  constructor(private http:HttpClient, private router: Router) {
    console.log("Servicio de autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(usuario: UsuarioLoginDTO): Observable<any> {
    return this.http.post<any>(this.url, usuario).pipe(
      map(data => {
        this.router.navigate(['/dashboard']);
        console.log("Data desde login service: ")
        console.log(data);
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this.loggedIn.next(true);
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
