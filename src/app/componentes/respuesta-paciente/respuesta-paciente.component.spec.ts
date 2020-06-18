import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaPacienteComponent } from './respuesta-paciente.component';

describe('RespuestaPacienteComponent', () => {
  let component: RespuestaPacienteComponent;
  let fixture: ComponentFixture<RespuestaPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
