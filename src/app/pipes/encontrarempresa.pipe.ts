import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encontrarempresa'
})
export class EncontrarempresaPipe implements PipeTransform {

  transform(empresas: any, buscarEmp: any): any {
    if(buscarEmp == undefined){
      return empresas;
    }else{
      return empresas.filter( empresaN =>{
        return empresaN.empresa.toLowerCase().includes(buscarEmp.toLowerCase());
      })
    }
  }

}
