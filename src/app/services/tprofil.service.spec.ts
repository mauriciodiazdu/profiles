import { TestBed, inject } from '@angular/core/testing';

import { TprofilService } from './tprofil.service';

describe('TprofilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TprofilService]
    });
  });

  it('should be created', inject([TprofilService], (service: TprofilService) => {
    expect(service).toBeTruthy();
  }));
});
