import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-rutina',
  templateUrl: './form-rutina.component.html',
  styleUrls: ['./form-rutina.component.css']
})
export class FormRutinaComponent {
  titulo = 'Formulario';
    
  public form;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
    nombre: ['',[Validators.required, Validators.maxLength(40)]],
    descripcion: ['',[Validators.required, Validators.maxLength(250)]],
    serie: ['',[Validators.required]],
    repeticion: ['',[Validators.required]],
    duracion: ['',[Validators.required]],
    descanso: ['',[Validators.required]],
    nombrerutina: ['',[Validators.required, Validators.maxLength(50)]],
    nombrezcuerpo: ['',[Validators.required, Validators.maxLength(60)]],
  });
  }
    
  }
