import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTurnoProfesionalComponent } from './listado-turno-profesional.component';

describe('ListadoTurnoProfesionalComponent', () => {
  let component: ListadoTurnoProfesionalComponent;
  let fixture: ComponentFixture<ListadoTurnoProfesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoTurnoProfesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTurnoProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
