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

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'productos', component: ProductosEmpresaComponent},
  { path: 'sucursales', component: SucursalComponent},
  { path: 'empresas', component: EmpresasComponent},
  { path: 'productosSucursales/:idSucursal', component: ProductosSucursalesComponent },
  { path: 'empresaSucursales/:idEmpresa', component: EmpresaSucursalesComponent },
  { path: "**", component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
