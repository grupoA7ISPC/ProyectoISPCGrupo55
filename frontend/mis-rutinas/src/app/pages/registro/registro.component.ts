import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  public registerForm;
  constructor(private formBuilder : FormBuilder){
    this.registerForm = this.formBuilder.group({
      nombre : ['',[Validators.required]],
      apellido : ['',[Validators.required]],
      usuario : ['',[Validators.required]],
      email : ['',[Validators.required, Validators.email]],
      password1 :['',[Validators.required, Validators.pattern('/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/')]],
      password2 : ['',[Validators.required, this.passwordMatchValidator]],
      fecha : ['',[Validators.required, ]],
      checkbox : ['',[Validators.required, Validators.requiredTrue]],
    })
  }
  sendForm(event:Event){
    event.preventDefault();
    this.registerForm.valid ? alert("Enviando al servidor...") : this.registerForm.markAllAsTouched();
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password1 = control.root.get('password1')?.value;  
      const password2 = control.value;  
      if (password1 == password2) {
        return null; 
      }
      return { passwordMismatch: true }
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


