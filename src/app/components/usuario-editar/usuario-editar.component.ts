import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuarios.model';
import { EmpresasService } from 'src/app/services/empresas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.scss'],
  providers: [ EmpresasService ]
})
export class UsuarioEditarComponent implements OnInit {

  tipos = [
    { nombreTipo: "Restaurante" },
    { nombreTipo: "Distribuidora" },
    { nombreTipo: "Banco" },
    { nombreTipo: "Supermercado" }
  ];

  public token;

  public EmpresasModelGetId: Usuario;

  constructor(public _EmpresasService: EmpresasService, private _router: Router) {
    this.EmpresasModelGetId = new Usuario('','','','','','','');
    this.token = this._EmpresasService.obtenerToken()
  }

  ngOnInit(): void {
    this.getEmpresasId(this._EmpresasService.obtenerIdentidad()._id);
  }




  getEmpresasId(idEmpresa){
    this._EmpresasService.rolEmpresaId(idEmpresa, this._EmpresasService.obtenerToken()).subscribe(

      (response)=>{
        this.EmpresasModelGetId = response.Empresas;
        console.log(this.EmpresasModelGetId )
      },
      (error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.mensaje
        })
      }
    )
  }

  putEmpresas(){
    this._EmpresasService.editarUsuario(this.EmpresasModelGetId, this._EmpresasService.obtenerToken()).subscribe(

      (response)=>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Editado Correctamente',
          text: "su usario ha sido editado de manera satisfactoria"
        })

      },
      (error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.mensaje
        })
      }
    )
  }

}
