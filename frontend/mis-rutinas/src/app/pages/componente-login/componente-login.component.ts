import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-componente-login',
  templateUrl: './componente-login.component.html',
  styleUrls: ['./componente-login.component.css']
})
export class ComponenteLoginComponent {
  email = new FormControl('',[],[]);
  password = new FormControl('',[],[]);
   
  public form;
  constructor (private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({ 
    password :['',[]],
    email:['',[]]
    }  
    )
  }

}
