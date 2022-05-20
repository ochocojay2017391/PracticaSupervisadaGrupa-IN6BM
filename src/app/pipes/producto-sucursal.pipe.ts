import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productoSucursal'
})
export class ProductoSucursalPipe implements PipeTransform {

  transform(productosSucursales: any, buscarSucu: any): any {
    if(buscarSucu == undefined){
      return productosSucursales;
    }else{
      return productosSucursales.filter( productoSucursal =>{
        return productoSucursal.NombreProductoSucursal.toLowerCase().includes(buscarSucu.toLowerCase());
      })
    }
  }

}
