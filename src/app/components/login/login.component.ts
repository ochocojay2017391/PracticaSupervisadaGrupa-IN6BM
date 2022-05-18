import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresa.model';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Router } from '@angular/router';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ EmpresasService ]

})

export class LoginComponent implements OnInit {


  // imprimir
  public empresaModel: Empresas;

  constructor(
    private _empresasServices: EmpresasService,
    private _router: Router
    ) {
    this.empresaModel = new Empresas(
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )

     }

  ngOnInit(): void {

  }

  getToken(){
    this._empresasServices.login(this.empresaModel, "true").subscribe(
      (response)=>{
        console.log(response);
        localStorage.setItem("token", response.token);

      },
      (error)=>{
        console.log(<any>error);
      }
    )

  }

  getTokenPromesa(): Promise<any> {

    return new Promise((resolve, reject) =>{
      this._empresasServices.login(this.empresaModel, "true").subscribe(
        (response) => {
          localStorage.setItem("token", response.token)
          resolve(response);
        },
          (error)=>{
            console.log(<any>error);
          }

      )
    })

  }

  login(){
    this._empresasServices.login(this.empresaModel, "false").subscribe(
      (response)=>{
        this.getTokenPromesa().then(respuesta=>{
          // localStorage.setItem("identidad", JSON.stringify(response.usuario))
          console.log(response);
          localStorage.setItem("identidad", JSON.stringify(response.usuario))
          this._router.navigate(['/inicio']);

        })
      },
      (error) =>{
        console.log(<any> error);
      }

    )

  }




}
