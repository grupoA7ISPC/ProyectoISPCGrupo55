import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRutinaComponent } from './form-rutina.component';

describe('FormRutinaComponent', () => {
  let component: FormRutinaComponent;
  let fixture: ComponentFixture<FormRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRutinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
