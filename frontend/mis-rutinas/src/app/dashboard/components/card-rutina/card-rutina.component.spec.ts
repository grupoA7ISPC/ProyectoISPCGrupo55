import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRutinaComponent } from './card-rutina.component';

describe('CardRutinaComponent', () => {
  let component: CardRutinaComponent;
  let fixture: ComponentFixture<CardRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRutinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
