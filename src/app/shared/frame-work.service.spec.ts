import { TestBed } from '@angular/core/testing';

import { FrameWorkService } from './frame-work.service';

describe('FrameWorkService', () => {
  let service: FrameWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
