import { TestBed } from '@angular/core/testing';

import { BBDService } from './bbd.service';

describe('BBDService', () => {
  let service: BBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
