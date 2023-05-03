import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteContactoComponent } from './componente-contacto.component';

describe('ComponenteContactoComponent', () => {
  let component: ComponenteContactoComponent;
  let fixture: ComponentFixture<ComponenteContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
