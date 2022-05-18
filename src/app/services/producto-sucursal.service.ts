import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductosSucursal} from '../models/productosSucursales.model'


@Injectable({
  providedIn: 'root'
})
export class ProductoSucursalService {
  public url : String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) { }

  EnviarProducto(idSucursal, modeloProducto: ProductosSucursal, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    let parametros = JSON.stringify(modeloProducto);

    return this._http.put(this.url + '/EnviarProductosSucursales/' + idSucursal, parametros, { headers: headersToken })
  }

  ObtenerProductoSucursal(idSucursal, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url+ '/VerProductosPorSucursalesId/' + idSucursal, { headers: headersToken})
  }

  obtenerProductosSucursalesId(idProducto, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );
    return this._http.get(this.url + '/VerProductosPorProductosId/'+ idProducto, { headers: headersToken})

  }

  VentaSimulada( modeloProductoSucursales: ProductosSucursal, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloProductoSucursales);


    return this._http.put(this.url + '/VentaProductosSucursales/' + modeloProductoSucursales.idSucursal, parametros, { headers: headersToken })
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

}
