import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-componente-login',
  templateUrl: './componente-login.component.html',
  styleUrls: ['./componente-login.component.css']
})
export class ComponenteLoginComponent {
  email = new FormControl('',[],[]);
}
