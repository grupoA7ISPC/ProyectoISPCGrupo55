import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Usuario, UsuarioDTO, UsuarioLoginDTO} from 'src/app/service/auth/usuario.service';


@Component({
  selector: 'app-componente-login',
  templateUrl: './componente-login.component.html',
  styleUrls: ['./componente-login.component.css']
})

export class ComponenteLoginComponent {
  email = new FormControl('',[]);
  password = new FormControl('',[]);
  usuario: UsuarioLoginDTO = new UsuarioDTO();

  public form;
  public error:any;

  constructor (private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password :['',[Validators.required]]
    }
  )}

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

  enviarFormulario(event:Event): void {
    event.preventDefault();

    if (this.form.valid) {
      console.log("this.form.value => ", this.form.value);
      let user: UsuarioLoginDTO = {
        email: this.form.value.email,
        password: this.form.value.password
      };
      console.log("user => ", user);
      this.authService.login(user).subscribe({
        next: (data) => {
          console.log("DATA: " + JSON.stringify(data));
          // this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.error = error;
        }
      });
    } else {
      console.log("Datos incompletos");
    }
  }
}
