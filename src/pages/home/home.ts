import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsuarioService} from "../../Servicios/usuario.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre = "Hola";
  password = "";
  constructor(public navCtrl: NavController,
              private _usuarioService: UsuarioService) {

  }

}
