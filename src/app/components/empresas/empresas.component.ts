import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresa.model';
import { EmpresasService } from 'src/app/services/empresas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [EmpresasService]
})
export class EmpresasComponent implements OnInit {

  public empresasModelGet: Empresas;
  public empresasModelPost: Empresas;
  public empresasModelGetId: Empresas;


  public token;


  constructor(public _empresasServices: EmpresasService) {

    this.token = this._empresasServices.obtenerToken();
    this.empresasModelPost = new Empresas('','','','','','','');
    this.empresasModelGetId = new Empresas('','','','','','','');

   }

  // Lista de empresas
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

  elegirRol=[
    {persona: "ROL_ADMIN"},
    {persona: "ROL_EMPRESA"},
  ]

   // VER EMPRESAS
    getEmpresas(){
     this._empresasServices.obtenerEmpresas(this._empresasServices.obtenerToken()).subscribe(

      (response) => {
        this.empresasModelGet = response.EMPRESAS;
        console.log(this.empresasModelGet);
      },
      
      (error)=>{
        console.log(error)
        Swal.fire({
        icon: 'error',
        title: 'Sin acceso',
        text: error.error.message,
        footer: 'Solo los administradores pueden estar aquí',

      })
    }
     )
    }

    // AGREGAR EMPRESAS

    postEmpresasAgregar(){
      this._empresasServices.agregarEmpresa(this.empresasModelPost, this._empresasServices.obtenerToken()).subscribe(

        (response)=>{

          console.log(response);

          this.getEmpresas();

          Swal.fire(
            '¡Agregado!',
            'La empresa fue agregada con éxito',
            'success'
          )
        },
        (error)=>{
          console.log(error)
          Swal.fire({
          icon: 'error',
          title: 'No se pudo agregar',
          text: error.error.message,
          footer: '*Revise sus datos e ingrese de nuevo*',

        })
      }
    )
    }

    // ELIMINAR EMPRESAS
    eliminarEmpresas(id){

      this._empresasServices.eliminarEmpresas(id, this.token).subscribe(

        (response)=>{
          console.log(response);
          this.getEmpresas();

          Swal.fire(
            '¡Eliminado!',
            'El dato fue eliminado con éxito',
            'success'
          )
        },
        (error)=>{
          Swal.fire({
            icon: 'error',
            title: 'No se pudo eliminar',
            text: error.error.message,
          })

        }
      )
    }

    // GET EMPRESAS ID
    getEmpresasId(idEmpresa){

      this._empresasServices.obtenerEmpresaId(idEmpresa, this.token).subscribe(

        (response)=>{
          console.log(response);

          this.empresasModelGetId = response.EMPRESAS;

        },

        (error)=>{

        }
      )
    }

    // EDITAR EMPRESAS
    putEmpresas(){
      this._empresasServices.editarEmpresas(this.empresasModelGetId, this.token).subscribe(

        (response)=>{

          console.log(response);

          this.getEmpresas();

          Swal.fire({
            icon: 'success',
            text: 'Se edito con éxito',
          })
        },
        (error) => {
          console.log(<any>error)
          Swal.fire({
            icon: 'error',
            title: 'No se pudo editar',
            text: error.error.message,
            footer: 'Revise e ingrese nuevamente'

          })
        }
      )
    }





  ngOnInit(): void {
    this.getEmpresas();
  }

}
