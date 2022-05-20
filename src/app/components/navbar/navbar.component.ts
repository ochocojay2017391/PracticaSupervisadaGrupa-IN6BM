import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public _empresaService: EmpresasService

  ) { }

  ngOnInit(): void {
  }

  clearToken(){
    localStorage.clear();

    Swal.fire({
      icon: 'success',
      title: 'Se ha cerrado la sesión',
      showConfirmButton: false,
      timer: 1500
    })

  }

}
