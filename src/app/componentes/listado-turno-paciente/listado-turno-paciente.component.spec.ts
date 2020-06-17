import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTurnoPacienteComponent } from './listado-turno-paciente.component';

describe('ListadoTurnoPacienteComponent', () => {
  let component: ListadoTurnoPacienteComponent;
  let fixture: ComponentFixture<ListadoTurnoPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoTurnoPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTurnoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
