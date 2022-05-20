import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { ProductosEmpresaComponent } from './components/productos-empresa/productos-empresa.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { ProductosSucursalesComponent } from './components/productos-sucursales/productos-sucursales.component';
import { EmpresaSucursalesComponent } from './components/empresa-sucursales/empresa-sucursales.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { RolEmpresaComponent } from './components/rol-empresa/rol-empresa.component';
import { RolAdminComponent } from './components/rol-admin/rol-admin.component';
import { EmpresasGuard } from './services/empresas.guard';
import { AdminGuard } from './services/admin.guard';
import { UsuarioEditarComponent } from './components/usuario-editar/usuario-editar.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'registrar', component: RegistrarComponent},

  // ROL ADMINISTRADOR
  { path: 'admin', component: RolEmpresaComponent, canActivate: [AdminGuard], children:[
    { path: 'inicio', component: InicioComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'empresas', component: EmpresasComponent},
    { path: 'empresaSucursales/:idEmpresa', component: EmpresaSucursalesComponent },
  ]},


  // ROL EMPRESA
  { path: 'rolempresa', component: RolAdminComponent, canActivate: [EmpresasGuard], children:[
    { path: 'inicio', component: InicioComponent},
    { path: 'dashboard', component: DashboardComponent},

    { path: 'productos', component: ProductosEmpresaComponent},
    { path: 'sucursales', component: SucursalComponent},
    { path: 'productosSucursales/:idSucursal', component: ProductosSucursalesComponent },
    { path: 'graficas/:idSucursal', component: GraficasComponent },
    { path: 'editarUsuario', component: UsuarioEditarComponent}

  ]},

  { path: "**", component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
