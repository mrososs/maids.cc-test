import { TestBed } from '@angular/core/test
import { UserFilterService } from './shared.service';
describe('SharedService', () => {
  let service: UserFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
