import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteLoginExitosoComponent } from './componente-login-exitoso.component';

describe('ComponenteLoginExitosoComponent', () => {
  let component: ComponenteLoginExitosoComponent;
  let fixture: ComponentFixture<ComponenteLoginExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteLoginExitosoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteLoginExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
