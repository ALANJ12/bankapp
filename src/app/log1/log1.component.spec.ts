import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Log1Component } from './log1.component';

describe('Log1Component', () => {
  let component: Log1Component;
  let fixture: ComponentFixture<Log1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Log1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Log1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
