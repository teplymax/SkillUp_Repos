import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstraningComponent } from './formstraning.component';

describe('FormstraningComponent', () => {
  let component: FormstraningComponent;
  let fixture: ComponentFixture<FormstraningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormstraningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormstraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
