import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';
import { ProductoSucursalService } from 'src/app/services/producto-sucursal.service';
import { ProductosSucursal } from 'src/app/models/productosSucursales.model';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-productos-sucursales',
  templateUrl: './productos-sucursales.component.html',
  styleUrls: ['./productos-sucursales.component.scss'],
  providers: [SucursalService, ProductoSucursalService]

})
export class ProductosSucursalesComponent implements OnInit {

  public productosModelGet: ProductosSucursal;
  public productoModelPost: ProductosSucursal;
  public productosSucursalesModelGetId: ProductosSucursal;
  public token;

  constructor(
    private _productosService: ProductoSucursalService,
    public _sucursalService: SucursalService,
    public _activatedRoute: ActivatedRoute

  ) {
    this.productoModelPost = new ProductosSucursal ('','','',0,0);
    this.productosSucursalesModelGetId = new ProductosSucursal ('','','',0,0);
    this.token = this._productosService.obtenerToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idSucursal'));

      this.getProductoSucursal(dataRuta.get('idSucursal'))
      this.getProductosSucursales();

    })
  }

  getProductoSucursal(idSucursal){
    this._productosService.ObtenerProductoSucursal(idSucursal, this.token).subscribe(
      (response)=>{
        this.productosModelGet = response.PRODUCTOS;
        console.log(this.productosModelGet)
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

  getProductosSucursalesId(idProducto){
    this._productosService.obtenerProductosSucursalesId(idProducto, this.token).subscribe(

      (response)=>{
        this.productosSucursalesModelGetId = response.PRODUCTOS;
        console.log(this.productosSucursalesModelGetId)
        this.productosSucursalesModelGetId.StockSucursal = 0;

      }, (error)=>{
        console.log(<any>error);

      }
    )
  }


  putVenta(){

    this._productosService.VentaSimulada(this.productosSucursalesModelGetId, this.token).subscribe(

      (response)=>{
        console.log(response);


        console.log(this.productosSucursalesModelGetId.idSucursal)
        this.getProductoSucursal(this.productosSucursalesModelGetId.idSucursal);

        Swal.fire(
          '¡Vendido!',
          'Tu producto fue vendido con éxito',
          'success'
        )
      },
      (error)=>{

        console.log(<any>error);
        Swal.fire({
        icon: 'error',
        title: 'No se puede vender',
        text: error.error.message,
        footer: 'Revisa que la cantidad que quieres vender no sobrepase el stock',

      })
    }
    )
  }

  getProductosSucursales(){

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

  eliminarProductosSucursales(id){
    this._productosService.EliminarProducto(id, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.getProductosSucursales();
        Swal.fire(
          '¡Eliminado!',
          'El producto fue eliminado con éxito',
          'success'
        )
      },
      (error)=>{

        console.log(<any>error);
        Swal.fire({
        icon: 'error',
        title: 'No se puede eliminar',
        text: error.error.message,
        footer: 'Revisa tus datos',

      })
    }
    )
  }



}
