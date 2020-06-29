import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdatacomponentComponent } from './newdatacomponent.component';

describe('NewdatacomponentComponent', () => {
  let component: NewdatacomponentComponent;
  let fixture: ComponentFixture<NewdatacomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdatacomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdatacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
