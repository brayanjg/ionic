import {Injectable} from "@angular/core";

@Injectable()

export class UsuarioService {
nombreUsuario ='Adrian';

sumar (numeroUno:number , numeroDos:number){
  return numeroDos+ numeroUno;
}
}
