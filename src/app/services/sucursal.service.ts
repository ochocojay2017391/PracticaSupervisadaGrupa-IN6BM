import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from '../models/sucursal.model';



@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  public url:String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;


  constructor(public _http: HttpClient) { }

  obtenerSucursales(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    //en esta parte se comunica en la parte de api .. y lo de mas que es al principio
    return this._http.get(this.url + '/obtenerSucursales', {headers: headersToken} )

  }

  // SUCURSALES ADMINISTRADOR
  obtenerSucursalesAdmin(idEmpresa, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/SurcursalesAdmin/' + idEmpresa, { headers: headersToken});
  }

  obtenerSucursalesId(idSucursal, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerIdSucursal/' + idSucursal, { headers: headersToken})

  }


  agregarSucursales(modeloSucursal: Sucursal, token): Observable<any>{

    let parametros = JSON.stringify(modeloSucursal);
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.post(this.url+'/agregarSucursal', parametros, { headers: headersToken })
  }

  editarSucursales(modeloSucursal: Sucursal, token): Observable<any> {
    let parametros = JSON.stringify(modeloSucursal);
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarSucursal/'+ modeloSucursal._id, parametros, { headers: headersToken })
  }

  eliminarSucursales( idSucursal, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarSucursales/' +  idSucursal, { headers: headersToken});
  }

obtenerToken(){
  var token2 = localStorage.getItem("token");
  if(token2 != undefined){
    this.token = token2;
  } else {
    this.token = '';
  }

  return this.token;
}

obtenerIdentidad(){
  var identidad2 = JSON.parse(localStorage.getItem('identidad'));
  if(identidad2 =! undefined){
    this.identidad = identidad2;

  }else{
    this.identidad = null;

  }
   return this.identidad;
}

}
