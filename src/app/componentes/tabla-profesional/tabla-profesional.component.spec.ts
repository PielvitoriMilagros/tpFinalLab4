import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProfesionalComponent } from './tabla-profesional.component';

describe('TablaProfesionalComponent', () => {
  let component: TablaProfesionalComponent;
  let fixture: ComponentFixture<TablaProfesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaProfesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
