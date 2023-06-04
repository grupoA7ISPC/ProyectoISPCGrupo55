import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  public registerForm;
  constructor(private formBuilder : FormBuilder){
    this.registerForm = this.formBuilder.group({
      nombre : ['',[]],
      apellido : ['',[]],
      usuario : ['',[]],
      email : ['',[]],
      password1 :['',[]],
      password2 : ['',[]],
      fecha : ['',[]],
      checkbox : ['',[]]
    })
  }
  sendForm(event:Event){
    event.preventDefault();
    this.registerForm.valid ? alert("Enviando al servidor...") : this.registerForm.markAllAsTouched();
  }
}


