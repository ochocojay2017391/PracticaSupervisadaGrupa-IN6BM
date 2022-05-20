import { Component, OnInit } from '@angular/core';
import { ProductoSucursalService } from 'src/app/services/producto-sucursal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss'],
  providers: [ProductoSucursalService]
})
export class GraficasComponent implements OnInit {

  chartOptions = {
    responsive: true,
  };

  chartLabels:any = [];
  chartData:any = [];
  chartColors:any = [
    {
      backgroundColor: []
    }
  ];

  chartLegend = true;
  chartPlugins = [];


  public productosModelGet: any = [];
  public token;


  constructor(
    private _productoSucursalService: ProductoSucursalService,
    public _activatedRoute: ActivatedRoute
  ) {
    this.token = this._productoSucursalService.obtenerToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idSucursal'));

      this.graficaProductoSucursal(dataRuta.get('idSucursal'))

    })
  }

  graficaProductoSucursal(idSucursal){

    this.chartData = [];
    this.chartLabels = []
    console.log(this.chartData);

    this._productoSucursalService.ObtenerProductoSucursal(idSucursal, this.token).subscribe(

      (response)=>{

        this.productosModelGet = response.PRODUCTOS;
        this.productosModelGet.forEach(datos => {
          this.chartLabels.push(datos.NombreProductoSucursal);
          this.chartData.push(datos.CantidadVendida);
          
          this.chartColors[0].backgroundColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        })

        console.log(this.productosModelGet)

      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

}
