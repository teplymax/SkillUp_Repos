import { TestBed } from '@angular/core/testing';

import { HomeworkLoginService } from './homework-login.service';

describe('HomeworkLoginService', () => {
  let service: HomeworkLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeworkLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
