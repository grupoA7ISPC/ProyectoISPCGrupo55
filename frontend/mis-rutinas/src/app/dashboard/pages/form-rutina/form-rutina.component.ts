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
  get Nombre()
  {
    return this.form.get("nombre");
  }
  get Descripcion()
  {
    return this.form.get("descripcion");
  }
  get Serie()
  {
    return this.form.get("serie");
  }
  get Repeticion()
  {
    return this.form.get("repeticion");
  }
  get Duracion()
  {
    return this.form.get("duracion");
  }
  get Descanso()
  {
    return this.form.get("descanso");
  }
  get NombreRutina()
  {
    return this.form.get("nombrerutina");
  }
  get NombreZCuerpo()
  {
    return this.form.get("nombrezcuerpo");
  }

  enviarformulario(event:Event){
    event.preventDefault();
    if(this.form.valid)
    {
      alert ("Enviando al servidor....")
    }
    else
    {
      this.form.markAllAsTouched();
    }
  }
    
  }
