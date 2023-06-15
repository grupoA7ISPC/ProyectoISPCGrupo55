import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/service/auth/auth.service';
import { Usuario } from 'src/app/service/auth/usuario.service';

@Component({
  selector: 'app-componente-login',
  templateUrl: './componente-login.component.html',
  styleUrls: ['./componente-login.component.css']
})

export class ComponenteLoginComponent {
  email = new FormControl('',[]);
  password = new FormControl('',[]);
  usuario:Usuario = new Usuario();
  public form;
  public error:any;
  constructor (private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
    
    this.form = this.formBuilder.group({ 
    email:['',[Validators.required, Validators.email]],
    password :['',[Validators.required]]
    
    }  
    )
  }

  ngOnInit(): void{
    
  }
  
  get Email()
  {
    return this.form.get("email");
  }
  get Password()
  {
    return this.form.get("password");
  }
  
  enviarformulario(event:Event, usuario:Usuario): void{
    event.preventDefault();
    this.authService.login(this.usuario).subscribe(data => {
      console.log("DATA"+ JSON.stringify( data));
      this.router.navigate(['/dashboard']);
    },error => {
      this.error = error;
    });}
    /*if(this.form.valid)
    {
      alert ("Enviando al servidor....")
    }
    else
    {
      this.form.markAllAsTouched();
    }
  }*/
}
