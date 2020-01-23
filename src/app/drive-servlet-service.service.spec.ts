import { TestBed } from '@angular/core/testing';

import { DriveServletServiceService } from './drive-servlet-service.service';

describe('DriveServletServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriveServletServiceService = TestBed.get(DriveServletServiceService);
    expect(service).toBeTruthy();
  });
});
