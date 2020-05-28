import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesTablaComponent } from './especialidades-tabla.component';

describe('EspecialidadesTablaComponent', () => {
  let component: EspecialidadesTablaComponent;
  let fixture: ComponentFixture<EspecialidadesTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialidadesTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadesTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
