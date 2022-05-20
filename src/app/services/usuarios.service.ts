import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empresas } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

    public url: String = 'http://localhost:3000/api';
    public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');


    constructor(public _http: HttpClient) { }

    agregarUsuario(modeloUsuarios: Empresas): Observable<any> {

      let parametros = JSON.stringify(modeloUsuarios);
      return this._http.post(this.url + '/registro', parametros, {headers: this.headersVariable})
    }

}
