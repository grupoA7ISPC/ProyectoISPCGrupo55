import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-componente-login',
  templateUrl: './componente-login.component.html',
  styleUrls: ['./componente-login.component.css']
})

export class ComponenteLoginComponent {
  email = new FormControl('',[]);
  password = new FormControl('',[]);
   
  public form;
  constructor (private formBuilder: FormBuilder){
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
