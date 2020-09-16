import { TestBed } from '@angular/core/testing';

import { LocationproviderService } from './locationprovider.service';

describe('LocationproviderService', () => {
  let service: LocationproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
