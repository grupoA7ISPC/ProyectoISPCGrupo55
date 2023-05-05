import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasIntegrantesComponent } from './tarjetas-integrantes.component';

describe('TarjetasIntegrantesComponent', () => {
  let component: TarjetasIntegrantesComponent;
  let fixture: ComponentFixture<TarjetasIntegrantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasIntegrantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasIntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
