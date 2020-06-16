import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasQueAtiendeComponent } from './dias-que-atiende.component';

describe('DiasQueAtiendeComponent', () => {
  let component: DiasQueAtiendeComponent;
  let fixture: ComponentFixture<DiasQueAtiendeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiasQueAtiendeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiasQueAtiendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
