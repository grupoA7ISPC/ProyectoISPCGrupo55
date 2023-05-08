import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteQuienesSomosComponent } from './componente-quienes-somos.component';

describe('ComponenteQuienesSomosComponent', () => {
  let component: ComponenteQuienesSomosComponent;
  let fixture: ComponentFixture<ComponenteQuienesSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteQuienesSomosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
