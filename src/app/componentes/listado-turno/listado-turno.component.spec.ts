import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTurnoComponent } from './listado-turno.component';

describe('ListadoTurnoComponent', () => {
  let component: ListadoTurnoComponent;
  let fixture: ComponentFixture<ListadoTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
