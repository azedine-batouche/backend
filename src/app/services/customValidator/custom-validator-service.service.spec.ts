import { TestBed } from '@angular/core/testing';

import { CustomValidatorServiceService } from './custom-validator-service.service';

describe('CustomValidatorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomValidatorServiceService = TestBed.get(CustomValidatorServiceService);
    expect(service).toBeTruthy();
  });
});
