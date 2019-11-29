import { TestBed } from '@angular/core/testing';

import { XptoAPService } from './xpto-ap.service';

describe('XptoAPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XptoAPService = TestBed.get(XptoAPService);
    expect(service).toBeTruthy();
  });
});
