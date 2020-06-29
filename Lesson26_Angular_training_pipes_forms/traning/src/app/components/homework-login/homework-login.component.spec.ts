import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkLoginComponent } from './homework-login.component';

describe('HomeworkLoginComponent', () => {
  let component: HomeworkLoginComponent;
  let fixture: ComponentFixture<HomeworkLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
