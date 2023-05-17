import { TestBed } from '@angular/core/testing';

import { SuscripcionService } from './suscripcion.service';

describe('SuscripcionService', () => {
  let service: SuscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
