import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusRutinasComponent } from './tus-rutinas.component';

describe('TusRutinasComponent', () => {
  let component: TusRutinasComponent;
  let fixture: ComponentFixture<TusRutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusRutinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TusRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
