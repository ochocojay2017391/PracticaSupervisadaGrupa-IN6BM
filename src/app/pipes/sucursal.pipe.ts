import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sucursal'
})
export class SucursalPipe implements PipeTransform {

  transform(sucursales: any, buscarEmp: any): any {
    if(buscarEmp == undefined){
      return sucursales;
    }else{
      return sucursales.filter( sucursalN =>{
        return sucursalN.nombreSucursal.toLowerCase().includes(buscarEmp.toLowerCase());
      })
    }
  }

}
