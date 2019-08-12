import { TestBed } from '@angular/core/testing';

import { UserdetailslistService } from './userdetailslist.service';

describe('UserdetailslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserdetailslistService = TestBed.get(UserdetailslistService);
    expect(service).toBeTruthy();
  });
});
