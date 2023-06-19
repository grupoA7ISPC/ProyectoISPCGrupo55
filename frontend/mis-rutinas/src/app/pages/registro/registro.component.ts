import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, MinLengthValidator } from '@angular/forms';
import { Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UsuarioService, Usuario } from 'src/app/service/auth/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  public registerForm;
  usuario: Usuario = new Usuario();
  
  constructor(private formBuilder: FormBuilder, private UsuarioService: UsuarioService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      apellido : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      usuario : ['',[Validators.required]],
      email : ['',[Validators.required, Validators.email]],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      fecha: ['', [Validators.required, this.fechaValidator]],
      checkbox : ['',[Validators.required, Validators.requiredTrue]]
    }, { validator: this.passwordMatchValidator('password1', 'password2')});
  }


  passwordMatchValidator(password1Key: string, password2Key: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password1 = control.get(password1Key)?.value;
      const password2 = control.get(password2Key)?.value;

      if (password1 === password2) {
        return null;
      }
      return { passwordMismatch: true };
    };
  }

  
  fechaValidator(control: FormControl) {
    const fechaNacimiento = new Date(control.value);
    const fechaMinima = new Date();
    fechaMinima.setFullYear(fechaMinima.getFullYear() - 13); // Restar 13 años a la fecha actual
  
    if (isNaN(fechaNacimiento.getTime())) {
      return { fechaInvalida: true }; // Retorna una clave personalizada para el error
    }
  
    if (fechaNacimiento > fechaMinima) {
      return { fechaMinima: true }; // Retorna una clave personalizada para el error
    }
  
    if (fechaNacimiento.getFullYear() < fechaMinima.getFullYear() - 99) {
      return { fechaInvalida: true }; // Retorna una clave personalizada para el error
    }
  
    return null; // Retorna null si la validación es exitosa
  }
  
 /* sendForm(event:Event){
    event.preventDefault();
    this.registerForm.valid ? alert("Enviando al servidor...") : this.registerForm.markAllAsTouched();
  }*/
  sendForm(event: Event, usuario: Usuario): void {
    event.preventDefault();
    if (this.registerForm.valid) {
      console.log("Enviando al servidor...");
      console.log(usuario);
      this.UsuarioService.onCrearUsuario(usuario).subscribe(
        data => {
          console.log(data.id);
          if (data.id > 0) {
            Swal.fire({
              title: '¡REGISTRO EXITOSO!',
              text: `Se ha creado el nuevo Usuario con id ${data.id}`,
              width: '800',
              padding: '3em',
              icon: 'success',
              confirmButtonText: 'Aceptar',
              backdrop: `
              rgba(255, 102, 0, 0.4)
   
                      left top
                      no-repeat
                      `,
              confirmButtonColor:'#262632'
            }).then(() => {
              this.router.navigate(['/login']);
            });
          }
        }
      );
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  

  get Nombre() {
    return this.registerForm.get('nombre');
  }


  get Apellido() {
    return this.registerForm.get('apellido');
  }

  get Usuario() {
    return this.registerForm.get('usuario');
  }

  get Email() {
    return this.registerForm.get('email');
  }

  get Password1() {
    return this.registerForm.get('password1');
  }

  get Password2() {
    return this.registerForm.get('password2');
  }

  get Fecha() {
    return this.registerForm.get('fecha');
  }

  get Checkbox() {
    return this.registerForm.get('checkbox');
  }
}


