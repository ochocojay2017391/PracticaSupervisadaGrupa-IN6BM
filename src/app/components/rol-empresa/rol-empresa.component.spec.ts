import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolEmpresaComponent } from './rol-empresa.component';

describe('RolEmpresaComponent', () => {
  let component: RolEmpresaComponent;
  let fixture: ComponentFixture<RolEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
