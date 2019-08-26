import { TestBed } from '@angular/core/testing';

import { OsmServiceService } from './osm-service.service';

describe('OsmServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsmServiceService = TestBed.get(OsmServiceService);
    expect(service).toBeTruthy();
  });
});
