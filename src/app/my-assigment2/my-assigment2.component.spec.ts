import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssigment2Component } from './my-assigment2.component';

describe('MyAssigment2Component', () => {
  let component: MyAssigment2Component;
  let fixture: ComponentFixture<MyAssigment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAssigment2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAssigment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
