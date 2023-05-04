import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteLoginComponent } from './componente-login.component';

describe('ComponenteLoginComponent', () => {
  let component: ComponenteLoginComponent;
  let fixture: ComponentFixture<ComponenteLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
