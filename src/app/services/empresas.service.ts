import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresas } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

    public url: String = 'http://localhost:3000/api';
    public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
    public identidad;
    public token;

    constructor(public _http: HttpClient) { }

    login(empresas, obtenerToken = null):  Observable<any> {

      if(obtenerToken != null){
        empresas.obtenerToken = obtenerToken;

      }
        let params = JSON.stringify(empresas);

        return this._http.post(this.url + '/login', params,{headers: this.headersVariable});

    }

    obtenerEmpresaId(id: String, token): Observable<any> {
      let headersToken=this.headersVariable.set('Authorization', token)
      return this._http.get(this.url + '/obtenerEmpresasId/' + id, { headers: headersToken })
    }

    obtenerToken(){
      var token2 = localStorage.getItem("token");
      if(token2 != undefined){
        this.token = token2;
      }else{
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


    // CRUD DE EMPRESAS
    obtenerEmpresas(token) : Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.get(this.url + '/obtenerEmpresas', { headers: headersToken});
    }

    agregarEmpresa(modeloEmpresa: Empresas, token) : Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token )

      let parametros = JSON.stringify(modeloEmpresa);

      return this._http.post(this.url + '/registrarAdmin', parametros, {headers: headersToken});

    }

    eliminarEmpresas( idEmpresa, token ): Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.delete(this.url + '/eliminarEmpresa/' +  idEmpresa, { headers: headersToken});

    }

    obtenerEmpresasId(idEmpresa, token): Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.get(this.url + '/obtenerEmpresasId/' + idEmpresa, { headers: headersToken})

    }

    editarEmpresas(modeloEmpresa: Empresas, token): Observable<any> {

      let parametros = JSON.stringify(modeloEmpresa);

      let headersToken = this.headersVariable.set('Authorization', token);

      return this._http.put(this.url + '/editarEmpresa/' + modeloEmpresa._id, parametros, { headers: headersToken })
    }


    


  }
