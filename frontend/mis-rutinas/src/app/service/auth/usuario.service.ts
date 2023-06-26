import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { DatePipe } from '@angular/common';

export class Usuario {
  id:number=0;
  nombre : string="";
  apellido : string="";
  usuario : string="";
  email : string="";
  password1: string="";
  password2: string="";
  fecha : string="";
  checkbox : string="";
}

export class UsuarioDTO {
  nombre: string = "";
  apellido: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  fec_nac: string = "";
}

export class UsuarioLoginDTO{
  email: string | null | undefined = "";
  password: string | null | undefined = "";
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  url: string = "http://127.0.0.1:8000/api/v1/registro"; // Añadir / si se necesita*

  constructor(private http:HttpClient){
    console.log("Servicio de Usuarios está corriendo...");
  }

  onCrearUsuario(usuario: UsuarioDTO): Observable<UsuarioDTO>{
    return this.http.post<UsuarioDTO>(this.url, usuario).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(null);
      })
    );
  }



}
