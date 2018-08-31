import { TestBed, inject } from '@angular/core/testing';

import { MoreservicesandinfoService } from './moreservicesandinfo.service';

describe('MoreservicesandinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoreservicesandinfoService]
    });
  });

  it('should be created', inject([MoreservicesandinfoService], (service: MoreservicesandinfoService) => {
    expect(service).toBeTruthy();
  }));
});
