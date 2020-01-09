import { TestBed } from '@angular/core/testing';

import { FetchtableService } from './fetchtable.service';

describe('FetchtableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchtableService = TestBed.get(FetchtableService);
    expect(service).toBeTruthy();
  });
});
