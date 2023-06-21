import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiSuscripcionComponent } from './mi-suscripcion.component';

describe('MiSuscripcionComponent', () => {
  let component: MiSuscripcionComponent;
  let fixture: ComponentFixture<MiSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiSuscripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
