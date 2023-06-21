import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';


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
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url="https://reqres.in/api/users/1";
  constructor(private http:HttpClient){
    console.log("Servicio de Usuarios está corriendo");
    
  }
  onCrearUsuario(Usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, Usuario);
  }
}