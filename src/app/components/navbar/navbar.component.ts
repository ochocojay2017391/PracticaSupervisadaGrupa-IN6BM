import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[EmpresasService]
})
export class NavbarComponent implements OnInit {
  public identidad;
  constructor(public _empresasService: EmpresasService) { 
     this.identidad = this._empresasService.obtenerIdentidad();


  }

  ngOnInit(): void {
    console.log(this.identidad)
  
  }
  logOut(){
    localStorage.clear();
  }


}
