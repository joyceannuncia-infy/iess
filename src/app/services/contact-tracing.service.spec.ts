import { TestBed } from '@angular/core/testing';

import { ContactTracingService } from './contact-tracing.service';

describe('ContactTracingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactTracingService = TestBed.get(ContactTracingService);
    expect(service).toBeTruthy();
  });
});
