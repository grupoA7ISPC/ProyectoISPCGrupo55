import { Component, OnInit } from '@angular/core';
import {listaIntegrantes} from '../../../../../../../backend/DataBase/datos';
import { Integrante } from './integrante';
 
@Component({
  selector: 'app-tarjetas-integrantes',
  templateUrl: './tarjetas-integrantes.component.html',
  styleUrls: ['./tarjetas-integrantes.component.css']
})
export class TarjetasIntegrantesComponent implements OnInit{
  listaTarjetas: Integrante[] = [] as any;
  constructor() { }
  
  ngOnInit(): void {
    this.listaTarjetas = listaIntegrantes;
  }

}
