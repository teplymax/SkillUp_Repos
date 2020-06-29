import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkRoutingComponent } from './homework-routing.component';

describe('HomeworkRoutingComponent', () => {
  let component: HomeworkRoutingComponent;
  let fixture: ComponentFixture<HomeworkRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
