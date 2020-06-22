import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTurnoComponent } from './display-turno.component';

describe('DisplayTurnoComponent', () => {
  let component: DisplayTurnoComponent;
  let fixture: ComponentFixture<DisplayTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
