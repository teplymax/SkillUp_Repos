import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkInboxComponent } from './homework-inbox.component';

describe('HomeworkInboxComponent', () => {
  let component: HomeworkInboxComponent;
  let fixture: ComponentFixture<HomeworkInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
