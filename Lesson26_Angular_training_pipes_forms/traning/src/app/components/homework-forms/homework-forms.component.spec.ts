import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkFormsComponent } from './homework-forms.component';

describe('HomeworkFormsComponent', () => {
  let component: HomeworkFormsComponent;
  let fixture: ComponentFixture<HomeworkFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
