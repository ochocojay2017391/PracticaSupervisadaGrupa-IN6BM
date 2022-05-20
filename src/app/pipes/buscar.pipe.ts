import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(productos: any, buscarProd: any): any {
    if(buscarProd == undefined){
      return productos;
    }else{
      return productos.filter( producto =>{
        return producto.nombreProducto.toLowerCase().includes(buscarProd.toLowerCase());
      })
    }
  }

}
