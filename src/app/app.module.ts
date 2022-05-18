import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ProductosEmpresaComponent } from './components/productos-empresa/productos-empresa.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { ProductosSucursalesComponent } from './components/productos-sucursales/productos-sucursales.component';
import { RolAdminComponent } from './components/rol-admin/rol-admin.component';
import { RolEmpresaComponent } from './components/rol-empresa/rol-empresa.component';
import { ChartsModule } from '@rinminase/ng-charts';
import { EmpresaSucursalesComponent } from './components/empresa-sucursales/empresa-sucursales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    InicioComponent,
    DashboardComponent,
    NavbarComponent,
    HeroDetailComponent,
    ProductosEmpresaComponent,
    SucursalComponent,
    EmpresasComponent,
    ProductosSucursalesComponent,
    RolAdminComponent,
    RolEmpresaComponent,
    EmpresaSucursalesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
