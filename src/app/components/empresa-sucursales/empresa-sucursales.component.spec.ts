import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaSucursalesComponent } from './empresa-sucursales.component';

describe('EmpresaSucursalesComponent', () => {
  let component: EmpresaSucursalesComponent;
  let fixture: ComponentFixture<EmpresaSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaSucursalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
