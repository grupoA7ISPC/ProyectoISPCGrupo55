import { TestBed } from '@angular/core/testing';

import { ImccalcService } from './imccalc.service';

describe('ImccalcService', () => {
  let service: ImccalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImccalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
