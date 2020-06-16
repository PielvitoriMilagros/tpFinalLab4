import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProfesionalComponent } from './listado-profesional.component';

describe('ListadoProfesionalComponent', () => {
  let component: ListadoProfesionalComponent;
  let fixture: ComponentFixture<ListadoProfesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoProfesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
