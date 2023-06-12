import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, MinLengthValidator } from '@angular/forms';
import { Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  public registerForm;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre : ['',[Validators.required]],
      apellido : ['',[Validators.required]],
      usuario : ['',[Validators.required]],
      email : ['',[Validators.required, Validators.email]],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      fecha : ['',[Validators.required]],
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

  dateValidator(fechakey: any):ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
      const fecha = control.get(fechakey)?.value;
      let fechaMinima= new Date('01/01/1900');
      const fechaNacimiento = new Date (fecha);
      let fechaActual = new Date();
      const diferenciaFechas = new Date(
          fechaNacimiento.getUTCFullYear() + 13,
          fechaNacimiento.getUTCMonth(),
          fechaNacimiento.getUTCDate()
      );

      if (new Date(fecha) > new Date() || new Date(fecha) < fechaMinima) {
        return { 'fechaInvalida': 'Ingrese una fecha válida' }
      } else if (diferenciaFechas >= fechaActual) {
        return { 'fechaMinima': 'Debes tener al menos 13 años' }
      }

      return null;
    }
  }

  sendForm(event:Event){
    event.preventDefault();
    this.registerForm.valid ? alert("Enviando al servidor...") : this.registerForm.markAllAsTouched();
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


