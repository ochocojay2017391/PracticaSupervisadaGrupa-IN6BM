import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/models/sucursal.model';
import { SucursalService } from 'src/app/services/sucursal.service';
import { ProductosSucursal } from 'src/app/models/productosSucursales.model';
import { ProductoSucursalService } from 'src/app/services/producto-sucursal.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.scss'],
  providers: [SucursalService, ProductoSucursalService]

})
export class SucursalComponent implements OnInit {

  public token;

  //Sucursal
  public sucursalModelGet: Sucursal;
  public sucursalModelPost: Sucursal;
  public sucursalModelGetId: Sucursal;
  public productoModelPost: ProductosSucursal;
  public buscar;

  constructor(
    private _sucursalService: SucursalService,
    public _productosService: ProductoSucursalService,) {

    this.productoModelPost = new ProductosSucursal('', '', '', 0, 0);

    this.sucursalModelPost = new Sucursal('','','','');
    this.sucursalModelGetId = new Sucursal('','','','');
    this.token = this._sucursalService.obtenerToken();

  }


  putProductosSucursal(){
    this._productosService.EnviarProducto( this.sucursalModelGetId._id ,this.productoModelPost, this.token).subscribe(

      (response)=>{

        console.log(response);

        this.productoModelPost.idSucursal = '';
        this.productoModelPost.NombreProductoSucursal = '';
        this.productoModelPost.StockSucursal = 0;
        this.productoModelPost.CantidadVendida = 0;


        Swal.fire(
          '¡Enviado!',
          'El producto fue enviado con éxito',
          'success'
        )
      },
      (error)=>{

        console.log(<any>error);
        Swal.fire({
        icon: 'error',
        title: 'No se puede enviar',
        text: error.error.message,
        footer: 'Revisa el nombre del producto o la cantidad que quieres enviar no sobrepase el stock',

      })
    }
    )
  }

   getSucursales(){
     this._sucursalService.obtenerSucursales(this._sucursalService.obtenerToken()).subscribe(
      (response) => {
        this.sucursalModelGet = response.Sucursales;
        console.log(this.sucursalModelGetId);
      },
      (error) => {
        console.log(<any>error)

      }
     )
    }

    getSucursalesId(idSucursal){
      this._sucursalService.obtenerSucursalesId(idSucursal, this.token).subscribe(
        (response)=>{
          console.log(response);

          this.sucursalModelGetId = response.SUCURSALES;

        },
        (error)=>{

        }
      )
    }


    postSucursalesAgregar(){
    this._sucursalService.agregarSucursales(this.sucursalModelPost, this._sucursalService.obtenerToken()).subscribe(

      (response)=>{
        console.log(response);
        this.getSucursales();

        Swal.fire(
          '¡Agregado!',
          'La sucursal fue agregada con éxito',
          'success'
        )
      },
      (error)=>{

        console.log(<any>error);
        Swal.fire({
        icon: 'error',
        title: 'No se pudo agregar',
        text: error.error.message,
        footer: 'Revise sus datos e intentelo otra vez',

      })
    }
  )
  }

  putSucursales(){
    this._sucursalService.editarSucursales(this.sucursalModelGetId, this.token).subscribe(

      (response)=>{
        console.log(response);
        this.getSucursales()
        Swal.fire(
          '¡Editado!',
          'La sucursal fue editada con éxito',
          'success'
        )
      },
      (error)=>{
        console.log(error)
        Swal.fire({
        icon: 'error',
        title: 'No se puede editar',
        text: error.error.message,
        footer: 'Revise sus datos y vuelvalo a intentar',

      })
    }
    )
  }

  eliminarSucursales(id){
    this._sucursalService.eliminarSucursales(id, this.token).subscribe(

      (response)=>{
        console.log(response);
        this.getSucursales();

        Swal.fire(
          '¡Eliminado!',
          'La sucursal fue eliminada con éxito',
          'success'
        )
      },
      (error)=>{
        console.log(error)
        Swal.fire({
        icon: 'error',
        title: 'No se puede eliminar',
        text: error.error.message,
        footer: 'Revise sus datos y vuelvalo a intentar',

      })
    }
    )
  }

  ngOnInit(): void {
    this.getSucursales();
   }


}
