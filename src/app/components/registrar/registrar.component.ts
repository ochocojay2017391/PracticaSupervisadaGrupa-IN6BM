import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresas } from 'src/app/models/empresa.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EmpresasService } from '../../services/empresas.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  providers: [EmpresasService ]
})
export class RegistrarComponent implements OnInit {

  //public UsuarioModelPost: Empresas;
  public empresaModelPost:Empresas; 
  constructor(private _empresaService: EmpresasService, private _router: Router) {

    //this.UsuarioModelPost= new Empresas('','','','','','','');
    this.empresaModelPost = new Empresas('','','','','','',''); 
  
  }

 clasificacion=[
    {tipo: "Restaurante"},
    {tipo: "Distribuidora"},
    {tipo: "Banco"},
    {tipo: "Supermercado"},
    {tipo: "Alimentos"},
    {tipo: "Transporte"},
    {tipo: "Alimentos"},
    {tipo: "Construcción"},
    {tipo: "Streaming"},
    {tipo: "Pública"},
    {tipo: "Escolar"}
  ]


  municipioG=[
    {lugar: "Amatitlán"},
    {lugar: "Chinautla"},
    {lugar: "Chuarrancho"},
    {lugar: "Ciudad de Guatemala"},
    {lugar: "Fraijanes"},
    {lugar: "Mixco"},
    {lugar: "Palencia"},
    {lugar: "San José del Golfo"},
    {lugar: "San José Pinula"},
    {lugar: "San Juan Sacatepequez"},
    {lugar: "San Miguel Petapa"},
    {lugar: "San Pedro Ayampuc"},
    {lugar: "San Pedro Sacatepequez"},
    {lugar: "San Raymundo"},
    {lugar: "Santa Catarina Pinula"},
    {lugar: "Villa Canales"},
    {lugar: "Villa Nueva"}
  ]

  ngOnInit(): void {
  }

  postEmpresa(){
    this._empresaService.agregarEmpresa(this.empresaModelPost).subscribe(
      (response) => {
        console.log(response);
        this._router.navigate(["login"])
      },
      (error) =>{
        console.log(<any> error)
      }
    )

  }
}

/*  postUsuarios(){
    this._usuarioServices.agregarUsuario(this.UsuarioModelPost).subscribe(
      (res) =>{
        console.log(res);
        this._router.navigate(["login"])
      },
      (error) =>{
        console.log(<any> error)

      }
    )

  }

}*/
