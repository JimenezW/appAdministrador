import { TestBed } from '@angular/core/testing';

import { AdmUserService } from './adm-user.service';

describe('AdmUserService', () => {
  let service: AdmUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
