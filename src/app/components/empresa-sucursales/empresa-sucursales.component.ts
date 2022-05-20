import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/models/sucursal.model';
import { SucursalService } from 'src/app/services/sucursal.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empresa-sucursales',
  templateUrl: './empresa-sucursales.component.html',
  styleUrls: ['./empresa-sucursales.component.scss'],
  providers: [SucursalService]
})

export class EmpresaSucursalesComponent implements OnInit {
  public productosModelGet: Sucursal;
  public token;

  constructor(
    public _sucursalService: SucursalService,
    public _activatedRoute: ActivatedRoute) {
      this.token = this._sucursalService.obtenerToken();
  }



  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idEmpresa'));

      this.getEmpresaSucursales(dataRuta.get('idEmpresa'))

    })
  }

  getEmpresaSucursales(idEmpresa){
    this._sucursalService.obtenerSucursalesAdmin(idEmpresa, this.token).subscribe(
      (response)=>{
        this.productosModelGet = response.Sucursales;

        console.log(this.productosModelGet)
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

}
