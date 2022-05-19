import { Component, OnInit } from '@angular/core';
import { productos } from 'src/app/models/productosEmpresa.model';
import { ProductosEmpresaService } from 'src/app/services/productos-empresas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-productos-empresa',
  templateUrl: './productos-empresa.component.html',
  styleUrls: ['./productos-empresa.component.scss'],
  providers: [ProductosEmpresaService]
})
export class ProductosEmpresaComponent implements OnInit {

  public productosModelGet: productos;
  public productosModelPost: productos;
  public productosModelGetId: productos;
  public token;

  constructor(private _productosService: ProductosEmpresaService) {


    this.productosModelPost = new productos('','','',0,'');
    this.productosModelGetId = new productos('','','',0,'');
    this.token = this._productosService.obtenerToken()
  }


  // CONSEGUIR LOS PRODUCTOS POR EMPRESA
  getProductos(){
    this._productosService.obtenerProductos(this._productosService.obtenerToken()).subscribe(

      (response) => {
        this.productosModelGet = response.PRODUCTOS;
        console.log(response);

      },
      (error) => {
        console.log(<any>error)
      }
    )
  }

  // AGREGAR PRODUCTOS POR EMPRESAS
    postProductosAgregar(){
    this._productosService.agregarProducto(this.productosModelPost, this._productosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos();

        Swal.fire(
          '¡Agregado!',
          'El producto fue agregado con éxito',
          'success'
        )
      },
      (error)=>{
        console.log(error)
        Swal.fire({
        icon: 'error',
        title: 'No se pudo agregar',
        text: error.error.message,
        footer: 'Revise sus datos, puede que el producto ya exista',

      })
    }
    )
  }

  // ELIMINAR PRODUCTOS POR EMPRESA
    eliminarProductos(id){
    this._productosService.eliminarProducto(id, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos()

        Swal.fire(
          '¡Eliminado!',
          'El producto fue eliminado con éxito',
          'success'
        )
      },
      (error)=>{
        console.log(error)
        Swal.fire({
        icon: 'error',
        title: 'No se pudo eliminar',
        text: error.error.message,
        footer: 'Vuelvalo a intentar',

      })
    }
    )

  }

  getProductosId(idProducto){

    this._productosService.obtenerProductoId(idProducto, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.productosModelGetId = response.PRODUCTOS;

      },

      (error)=>{
        console.log(<any>error);

      }
    )
  }

  putProductos(){
    this._productosService.editarProducto(this.productosModelGetId, this.token).subscribe(

      (response)=>{
        console.log(response);
        this.getProductos();
        Swal.fire(
          '¡Editado!',
          'El producto fue editado con éxito',
          'success'
        )
      },
      (error)=>{
        console.log(<any>error);
        Swal.fire({
        icon: 'error',
        title: 'No se pudo editar',
        text: error.error.message,
        footer: 'Vuelvalo a intentar',

      })
    }
    )
  }


  getStockMayor(){
    this._productosService.OrdenarStockMayor(this.token).subscribe(
      (response)=>{

        this.productosModelGet = response.PRODUCTOS;
        console.log(response);

      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }


  getStockMenor(){
    this._productosService.OrdenarStockMenor(this.token).subscribe(
      (response)=>{

        this.productosModelGet = response.PRODUCTOS;
        console.log(response);

      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }



  ngOnInit(): void {
    this.getProductos();
  }

}
