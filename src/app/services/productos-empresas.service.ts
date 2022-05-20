import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { productos } from '../models/productosEmpresa.model';



@Injectable({
  providedIn: 'root'
})
export class ProductosEmpresaService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;

  constructor(public _http: HttpClient) { }

  // HECHO
  obtenerProductos(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/obtenerProductos', { headers: headersToken })
  }

  // correcto
  obtenerProductoId(id, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerProductosId/' + id, { headers: headersToken})

  }



  // HECHO
  agregarProducto(modeloProducto: productos, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloProducto);


    return this._http.post(this.url+'/agregarProductos', parametros, { headers: headersToken })
  }

  obtenerProductosNombre(nombre: String, tipo: String, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    if(tipo=="Nombre"){
      return this._http.get(this.url + '/buscarProductoNombre/'+nombre, { headers: headersToken })
    }else{
      return this._http.get(this.url + '/buscarProductoProveedor/'+nombre, { headers: headersToken })
    }

  }

  editarProducto(modeloProducto: productos, token): Observable<any> {

    let parametros = JSON.stringify(modeloProducto);

    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.put(this.url + '/editarProductos/' + modeloProducto._id, parametros, { headers: headersToken})
  }

  // HECHO
  eliminarProducto( id, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarProductos/' +  id, { headers: headersToken});

  }


  // ORDENAR POR EL STOCK MAYOR
  OrdenarStockMayor(token):Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/OrdenarStockMayor', { headers: headersToken })

  }

  // ORDENAR POR EL STOCK MENOR
  OrdenarStockMenor(token):Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/OrdenarStockMenor', { headers: headersToken })

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
