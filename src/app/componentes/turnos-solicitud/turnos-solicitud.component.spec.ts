import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosSolicitudComponent } from './turnos-solicitud.component';

describe('TurnosSolicitudComponent', () => {
  let component: TurnosSolicitudComponent;
  let fixture: ComponentFixture<TurnosSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnosSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
